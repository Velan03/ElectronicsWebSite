import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import {RouterLink} from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink,RouterOutlet, HomepageComponent,AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ElectronicsWebSite';
}
