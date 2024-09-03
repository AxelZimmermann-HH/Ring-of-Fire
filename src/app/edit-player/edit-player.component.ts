import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-edit-player',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule, MatDialogModule],
  templateUrl: './edit-player.component.html',
  styleUrl: './edit-player.component.scss'
})
export class EditPlayerComponent {

  name: string = '';

  constructor(
    public dialogRef: MatDialogRef<EditPlayerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { name: string; animal: string } // @Inject-Dekorator verwenden
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
