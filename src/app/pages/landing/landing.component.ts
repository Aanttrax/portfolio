import { Component } from '@angular/core';
import { HeroComponent } from '@components/hero/hero.component';
import { NavbarComponent } from '@shared/navbar/navbar.component';
import { PortfolioComponent } from '@components/portfolio/portfolio.component';
import { ExperienceComponent } from '@components/experience/experience.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [HeroComponent, NavbarComponent, PortfolioComponent, ExperienceComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingPage {}
