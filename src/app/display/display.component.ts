import { Component, Input } from '@angular/core';
import { Root } from '../pokedata.interface';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {

  @Input() pokemon?:Root
}
