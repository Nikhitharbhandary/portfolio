import { AfterViewInit, Component } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About implements AfterViewInit {
  ngAfterViewInit() {
    setTimeout(() => {
      gsap.from(".image-section", {
        opacity: 0,
        x: -100,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".about",
          start: "top 80%"
        }
      });
      gsap.from(".content-section", {
        opacity: 0,
        x: 100,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".about",
          start: "top 80%"
        }
      });
      ScrollTrigger.refresh();
    }, 100);
  }
}

