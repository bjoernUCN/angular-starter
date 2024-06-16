import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbaritemComponent } from './navbarcomponents/navbaritem/navbaritem.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbaritemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';

  constructor(){
    this.LogOnStartup();
  }

  LogOnStartup(){
    console.log("Application has launched");
  }
  
}
