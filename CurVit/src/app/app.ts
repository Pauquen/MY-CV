import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/header/header';
import { Footer } from './shared/footer/footer';
import { Router } from '@angular/router';
import { NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('CurVit');

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {

        const fragment = this.router.parseUrl(this.router.url).fragment;

        if (fragment) {
          // 🔹 Scroll al DIV exacto
          setTimeout(() => {
            const el = document.getElementById(fragment);
            if (el) {
              el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          });
        } else {
          // 🔹 Scroll arriba si NO hay fragment
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }

      }
    });
  }
}
