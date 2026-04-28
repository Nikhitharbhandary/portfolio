import { Component, HostListener } from '@angular/core';
@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  activeSection = 'home';
  @HostListener('window:scroll', [])
  onScroll() {
    const sections = document.querySelectorAll('section');
    sections.forEach((section: any) => {
      const top = section.offsetTop - 150;
      const height = section.offsetHeight;
      if (window.scrollY >= top && window.scrollY < top + height) {
        this.activeSection = section.id;
      }
    });
  }
}
