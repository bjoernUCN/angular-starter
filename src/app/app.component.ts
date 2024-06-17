import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbaritemComponent } from './navigation/navbaritem/navbaritem.component';
import { NgFor } from '@angular/common';
<<<<<<< Updated upstream

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbaritemComponent, NgFor],
=======
import { FormsModule } from '@angular/forms'; 
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbaritemComponent, NgFor, FormsModule, ColorPickerComponent, RouterModule],
>>>>>>> Stashed changes
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';

  constructor(){
    this.LogOnStartup();
  }

  createRange(number: Number){
    return new Array(number).fill(0)
      .map((n, index) => index + 1);
  }

  LogOnStartup(){
    console.log("Application has launched");
  }
  
}
