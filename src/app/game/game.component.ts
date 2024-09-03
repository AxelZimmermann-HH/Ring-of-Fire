import { CommonModule } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';
import { Game } from '../../models/game';
import { PlayerComponent } from "../player/player.component";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { DialogComponent } from '../dialog/dialog.component';
import { GameInfoComponent } from "../game-info/game-info.component";
import { query, orderBy, limit, where, Firestore, collection, collectionData, doc, onSnapshot, addDoc, updateDoc, deleteDoc, docData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { CollectionReference, DocumentData } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { EditPlayerComponent } from '../edit-player/edit-player.component';


@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, PlayerComponent, MatButtonModule,
    MatIconModule, MatDialogModule, MatFormFieldModule,
    MatInputModule, DialogComponent, GameInfoComponent],
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {
  
  game: Game;
  gameId: string = '';
  
  firestore: Firestore = inject(Firestore);

  gamesCollection = collection(this.firestore, 'games');
  screenWidth: number;


  constructor(private route: ActivatedRoute, private dialog: MatDialog) {
    this.screenWidth = window.innerWidth;
    this.game = new Game;

    this.route.params.subscribe((params) => {
      this.gameId = params['id'];  // Die ID aus der URL
      console.log(this.gameId);
    
      // Greife auf das spezifische Dokument innerhalb der gamesCollection zu
      const specificGameDoc = doc(this.gamesCollection, this.gameId);
    
      // Abonniere die Daten des spezifischen Dokuments
      const specificGameData$ = docData(specificGameDoc);
      
      specificGameData$.subscribe((game: any) => {
        console.log('Game update', game);
        this.game.currentPlayer = game.currentPlayer;
        this.game.playedCards = game.playedCards;
        this.game.players = game.players;
        this.game.stack = game.stack;
        this.game.pickCardAnimation = game.pickCardAnimation;
        this.game.currentCard = game.currentCard;
      });
    });
  };

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = event.target.innerWidth;
  }

  isScreenNarrow(): boolean {
    return this.screenWidth < 700;
  }

  

  takeCard() {
    if(!this.game.pickCardAnimation) {
      this.game.currentCard = this.game.stack.pop(); // nimmt den letzten Wert aus dem Array und entfernt ihn
      
      this.game.pickCardAnimation = true;

    }
    
    setTimeout(() => {
      this.game.pickCardAnimation = false;
      this.game.playedCards.push(this.game.currentCard);
      
      this.game.currentPlayer++;
      this.game.currentPlayer = this.game.currentPlayer % this.game.players.length;

      this.saveGame();
    }, 1000);
  };

  editPlayer(index: number): void {
    let dialogRef = this.dialog.open(DialogComponent, {
      data: { name: this.game.players[index] } // Den aktuellen Namen des Spielers an den Dialog übergeben
    });

    dialogRef.afterClosed().subscribe((updatedName: string) => {

      if (updatedName && updatedName.length > 0) {
        this.game.players[index] = updatedName; // Spielername an der richtigen Position in der Liste aktualisieren
      
        this.saveGame();
      }
    });
  }

  removePlayer(name: string): void {
    let i = this.game.players.indexOf(name); // Finde den Index des Namens im Array
    if (i > -1) { // Überprüfe, ob der Name im Array existiert
      this.game.players.splice(i, 1); // Entferne das Element an diesem Index
      this.saveGame(); // Speichere das Spiel nach dem Entfernen
    }
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe((name:string) => {
      if (name && name.length > 0) {
        this.game.players.push(name);
        this.saveGame();
      };
    });
  };

  saveGame() {
    let specificGameDoc = doc(this.gamesCollection, this.gameId);

    // Aktualisiere das Dokument mit den neuen Daten
    updateDoc(specificGameDoc, this.game.toJson())
      .then(() => {
        console.log('Dokument erfolgreich aktualisiert');
      })
      .catch((error) => {
        console.error('Fehler beim Aktualisieren des Dokuments: ', error);
      });
  }
};