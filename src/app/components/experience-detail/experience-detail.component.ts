import { Component, input } from '@angular/core';
import { IExperiences } from '@models/data.interface';
import { SanitizerPipe } from '@pipes/sanitizer.pipe';

@Component({
  selector: 'app-experience-detail',
  standalone: true,
  imports: [SanitizerPipe],
  templateUrl: './experience-detail.component.html',
  styleUrl: './experience-detail.component.scss',
})
export class ExperienceDetailComponent {
  experience = input.required<IExperiences>();
}
