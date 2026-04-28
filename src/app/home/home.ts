import { AfterViewInit, Component } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { About } from '../about/about';
import { Projects } from '../projects/projects';
import { Contact } from '../contact/contact';
import { Skills } from '../skills/skills';
import gsap from 'gsap';
import { Experience } from '../experience/experience';

@Component({
  selector: 'app-home',
  imports: [
    Header,
    Footer,
    About,
    Projects,
    Contact,
    Skills,
    Experience
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements AfterViewInit {
   ngAfterViewInit() {

    gsap.from(".hero h1", {
      opacity: 0,
      y: -50,
      duration: 1
    });

    gsap.from(".hero h2", {
      opacity: 0,
      x: -50,
      delay: 0.3,
      duration: 1
    });

    gsap.from(".hero p", {
      opacity: 0,
      y: 30,
      delay: 0.5,
      duration: 1
    });

    gsap.from(".buttons button", {
      scale: 0,
      stagger: 0.2,
      delay: 0.8,
      duration: 0.5
    });

  }
}
