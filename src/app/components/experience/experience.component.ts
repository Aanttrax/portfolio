import { animate, state, style, transition, trigger } from '@angular/animations';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  signal,
  viewChild,
  OnDestroy,
  inject,
} from '@angular/core';
import { CardExperienceComponent } from '@components/card-experience/card-experience.component';
import { ExperienceDetailComponent } from '@components/experience-detail/experience-detail.component';
import { experiences } from '@data/experience.data';
import { IExperiences } from '@models/data.interface';
import { DataService } from '@services/data.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CardExperienceComponent, ExperienceDetailComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
  animations: [
    trigger('textVariant', [
      state(
        'hidden',
        style({
          transform: 'translateY(-50px)',
          opacity: 0,
        })
      ),
      state(
        'show',
        style({
          transform: 'translateY(0)',
          opacity: 1,
        })
      ),
      transition('hidden => show', [animate('1.25s ease-out')]),
    ]),
  ],
})
export class ExperienceComponent implements OnInit, AfterViewInit, OnDestroy {
  titleExperience = viewChild.required<ElementRef>('titleExperience');
  isMobile = signal<boolean>(false);
  inView = signal<boolean>(false);
  selectedJob = signal<IExperiences>(experiences[0]);

  private dataService = inject(DataService);

  ngOnInit(): void {
    this.selectedJob.set(this.experiences[0]);
    this.handleResize();
    window.addEventListener('resize', this.handleResize.bind(this));
  }

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      entries => {
        this.inView.set(entries[0].isIntersecting);
      },
      { threshold: 0.2 }
    );
    observer.observe(this.titleExperience().nativeElement);
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.handleResize.bind(this));
  }

  handleResize() {
    this.isMobile.set(window.innerWidth < 640);
  }

  selectJob(job: IExperiences) {
    this.selectedJob.set(job);
  }

  get experiences() {
    return this.dataService.getExperiences();
  }
}
