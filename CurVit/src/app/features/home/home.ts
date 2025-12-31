import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Homecards } from '../homecards/homecards';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, Homecards, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
