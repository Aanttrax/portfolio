import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { DataService } from '@services/data.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  active = 'hero';
  toggle = false;
  scrolled = false;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.observeSections();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 100;
  }

  setActive(sectionId: string) {
    this.active = sectionId;
    window.scrollTo(0, 0);
  }

  toggleMenu() {
    this.toggle = !this.toggle;
  }

  private observeSections() {
    const sections = document.querySelectorAll('div[id]');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.active = entry.target.id;
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
