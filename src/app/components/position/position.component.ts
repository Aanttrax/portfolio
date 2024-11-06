import { Component } from '@angular/core';

@Component({
  selector: 'app-position',
  standalone: true,
  imports: [],
  templateUrl: './position.component.html',
  styleUrl: './position.component.scss',
})
export class PositionComponent {
  position = 'Software Engineer';
  position2 = 'Data Analyst';
}
