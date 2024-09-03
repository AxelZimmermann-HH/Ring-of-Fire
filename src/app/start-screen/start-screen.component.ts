import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { GameComponent } from '../game/game.component';
import { query, orderBy, limit, where, Firestore, collection, collectionData, doc, onSnapshot, addDoc, updateDoc, deleteDoc, docData } from '@angular/fire/firestore';
import { Game } from '../../models/game';

@Component({
  selector: 'app-start-screen',
  standalone: true,
  imports: [CommonModule, GameComponent],
  templateUrl: './start-screen.component.html',
  styleUrl: './start-screen.component.scss'
})
export class StartScreenComponent {

  firestore: Firestore = inject(Firestore);

  constructor(private router: Router) {

  }

  newGame() {
    let game = new Game;
    let gamesCollection = collection(this.firestore, 'games');
    addDoc(gamesCollection, game.toJson())
    .then((gameInfo:any) => {
      console.log('Dokument erfolgreich hinzugefügt');
      this.router.navigateByUrl('/game/' + gameInfo.id);
    })
    .catch((error) => {
      console.error('Fehler beim Hinzufügen des Dokuments: ', error);
    });

    
  }
}
