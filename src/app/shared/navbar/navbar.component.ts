import { CommonModule } from '@angular/common';
import { Component, HostListener, inject, OnInit, signal } from '@angular/core';
import { DataService } from '@services/data.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styles: '',
})
export class NavbarComponent implements OnInit {
  active = signal<string>('hero');
  toggle = signal<boolean>(false);
  scrolled = signal<boolean>(false);
  private dataService = inject(DataService);

  ngOnInit(): void {
    this.observeSections();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled.set(window.scrollY > 100);
  }

  setActive(sectionId: string) {
    this.active.set(sectionId);
    window.scrollTo(0, 0);
  }

  toggleMenu() {
    this.toggle.set(!this.toggle());
  }

  private observeSections() {
    const sections = document.querySelectorAll('div[id]');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.active.set(entry.target.id);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50% 0px',
      }
    );

    sections.forEach(section => observer.observe(section));
  }

  get navLinks() {
    return this.dataService.getNavLinks();
  }
}
