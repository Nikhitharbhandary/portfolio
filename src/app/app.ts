import { Component, signal, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-app');
   @HostListener('window:scroll', [])
  onScroll() {
    const elements = document.querySelectorAll('.fade-in');

    elements.forEach((el: any) => {
      const position = el.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;

      if (position < screenHeight - 100) {
        el.classList.add('show');
      }
    });
  }
}
