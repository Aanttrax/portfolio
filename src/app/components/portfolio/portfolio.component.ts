import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, inject, OnInit, signal, viewChild } from '@angular/core';
import { CardProjectComponent } from '@components/card-project/card-project.component';
import { DataService } from '@services/data.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CardProjectComponent],
  templateUrl: './portfolio.component.html',
  styles: '',
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
export class PortfolioComponent implements OnInit {
  inView = signal<boolean>(false);
  projectCard = viewChild.required<ElementRef>('projectTittle');

  private dataService = inject(DataService);

  ngOnInit(): void {
    const observer = new IntersectionObserver(
      entries => {
        this.inView.set(entries[0].isIntersecting);
      },
      { threshold: 0.05 }
    );
    observer.observe(this.projectCard().nativeElement);
  }

  get portfolio() {
    return this.dataService.getPortfolio();
  }
}
