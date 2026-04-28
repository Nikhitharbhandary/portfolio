import { AfterViewInit, Component } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact  implements AfterViewInit{
   ngAfterViewInit() {
    setTimeout(() => {
      gsap.from(".info", {
        opacity: 0,
        x: -80,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".contact",
          start: "top 80%"
        }
      });
      gsap.from(".form", {
        opacity: 0,
        x: 80,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".contact",
          start: "top 80%"
        }
      });
      ScrollTrigger.refresh();
    }, 100);
  }
}
