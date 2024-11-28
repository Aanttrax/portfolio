import { Component } from '@angular/core';
import { SpacemanComponent } from '@components/spaceman/spaceman.component';
import { PositionComponent } from '@components/position/position.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [SpacemanComponent, PositionComponent],
  templateUrl: './hero.component.html',
  styles: '',
})
export class HeroComponent {}
