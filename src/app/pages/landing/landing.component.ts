import { Component } from '@angular/core';
import { HeroComponent } from '@components/hero/hero.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [HeroComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingPage {}
