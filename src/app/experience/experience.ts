import { AfterViewInit, Component } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience  implements AfterViewInit{
  ngAfterViewInit() {
    setTimeout(() => {
      gsap.from(".timeline-item", {
        opacity: 0,
        x: -60,
        duration: 0.8,
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".experience",
          start: "top 80%"
        }
      });
      ScrollTrigger.refresh();
    }, 100);
  }
}
