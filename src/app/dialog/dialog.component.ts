import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core'; // Importiere Inject
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule, MatDialogModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {
  name: string = '';
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { name: string; animal: string } // @Inject-Dekorator verwenden
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
