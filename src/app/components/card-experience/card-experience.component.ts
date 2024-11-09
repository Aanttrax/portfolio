import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { IExperiences } from '@models/data.interface';

@Component({
  selector: 'app-card-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-experience.component.html',
  styleUrl: './card-experience.component.scss',
})
export class CardExperienceComponent {
  experience = input.required<IExperiences>();
  isActive = input.required<boolean>();
  isMobile = input.required<boolean>();
  onClick = output<void>();
}
