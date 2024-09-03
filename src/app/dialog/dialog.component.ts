import { CommonModule } from '@angular/common';
import { Component, inject, Inject, Input, Output, EventEmitter } from '@angular/core'; // Importiere Inject
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { query, orderBy, limit, where, Firestore, collection, collectionData, doc, onSnapshot, addDoc, updateDoc, deleteDoc, docData } from '@angular/fire/firestore';
import { Game } from '../../models/game';
import { GameComponent } from '../game/game.component';





@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [CommonModule, GameComponent, MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule, MatDialogModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {
  name: string = '';
  showAdditionalButton: boolean = false;

  firestore: Firestore = inject(Firestore);

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { name: string; animal: string } // @Inject-Dekorator verwenden
  ) {}

  ngOnInit(): void {
    if (this.data && this.data.name) {
      this.name = this.data.name; // Den übergebenen Namen im Eingabefeld anzeigen
      this.showAdditionalButton = true;
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
