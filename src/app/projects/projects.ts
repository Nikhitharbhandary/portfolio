import { AfterViewInit, Component } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects implements AfterViewInit {
    ngAfterViewInit() {
    setTimeout(() => {
      gsap.fromTo(".project-card",
        {
          opacity: 0,
          y: 60
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".projects",
            start: "top 80%",
            toggleActions: "play none none none",
            markers: false
          }
        }
      );
      gsap.fromTo(".chips span",
        {
          opacity: 0,
          scale: 0.7,
          y: 20
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".projects",
            start: "top 85%"
          }
        }
      );
      ScrollTrigger.refresh();
    }, 100);
  }
}
