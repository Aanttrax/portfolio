import { Component } from '@angular/core';
import { SpacemanComponent } from '@components/spaceman/spaceman.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [SpacemanComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {}
