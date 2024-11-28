import { Component } from '@angular/core';
import { HeroComponent } from '@components/hero/hero.component';
import { NavbarComponent } from '@shared/navbar/navbar.component';
import { PortfolioComponent } from '@components/portfolio/portfolio.component';
import { ExperienceComponent } from '@components/experience/experience.component';
import { ContactComponent } from '@components/contact/contact.component';
import { FooterComponent } from '@shared/footer/footer.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    HeroComponent,
    NavbarComponent,
    PortfolioComponent,
    ExperienceComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './landing.component.html',
  styles: '',
})
export class LandingPage {}
