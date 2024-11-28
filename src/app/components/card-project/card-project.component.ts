import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, ElementRef, input, OnInit, signal, viewChild } from '@angular/core';

@Component({
  selector: 'app-card-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-project.component.html',
  styles: '',
  animations: [
    trigger('fadeIn', [
      state(
        'hidden',
        style({
          opacity: 0,
          transform: 'translateY(100px)',
        })
      ),
      state('show', style({ opacity: 1 })),
      transition('hidden => show', animate('0.75s ease-in')),
    ]),
  ],
})
export class CardProjectComponent implements OnInit {
  index = input.required<number>();
  name = input.required<string>();
  description = input.required<string>();
  image = input.required<string>();
  link = input.required<string>();
  projectCard = viewChild.required<ElementRef>('projectCard');
  inView = signal<boolean>(false);

  ngOnInit(): void {
    const observer = new IntersectionObserver(
      entries => {
        this.inView.set(entries[0].isIntersecting);
      },
      { threshold: 0.2 }
    );
    observer.observe(this.projectCard().nativeElement);
  }

  get isEven(): boolean {
    return this.index() % 2 === 0;
  }
}
