import { Component } from '@angular/core';
import { HeroComponent } from '@components/hero/hero.component';
import { NavbarComponent } from '@shared/navbar/navbar.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [HeroComponent, NavbarComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingPage {}
