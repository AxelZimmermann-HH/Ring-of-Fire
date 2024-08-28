import { CommonModule } from '@angular/common';
import {ChangeDetectionStrategy, Component, Input, OnChanges} from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-game-info',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './game-info.component.html',
  styleUrl: './game-info.component.scss'
})
export class GameInfoComponent implements OnChanges {
  cardAction = [
    { title: 'Waterfall', description: 'Everyone has to start drinking at the same time.'},
    { title: 'You', description: 'You decide who drinks.'},
    { title: 'Me', description: 'Congrats! Drink a shot!'},
    { title: 'Category', description: 'Come up with a category. Each player must enumerate one item from the category.'},
    { title: 'Bust a jive', description: 'Player 1 makes a dance move. Player 2 repeats and adds a second one.'},
    { title: 'Chicks', description: 'All girls drink!'},
    { title: 'Heaven', description: 'Put your hands up! The last player drinks!'},
    { title: 'Mate', description: 'Pick a mate. Your mate must always drink when you drink and the other way around.'},
    { title: 'Thumbmaster', description: ''},
    { title: 'Men', description: 'All men drink!'},
    { title: 'Quizmaster', description: ''},
    { title: 'Never have I ever...', description: 'Say something you never did. Everyone who didi it has to drink.'},
    { title: 'Rule', description: 'Make a rule. Everyone needs to drink when he breaks the rule.'}
  ]

  title:string = '';
  description:string = '';

  @Input() card = '';

  constructor() {};

  ngOnChanges() {
    if(this.card) {
    let cardNumber = +this.card.split('_')[1];
    this.title = this.cardAction[cardNumber-1].title;
    this.description = this.cardAction[cardNumber-1].description;
  }
  }
}
