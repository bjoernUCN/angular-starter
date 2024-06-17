import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbaritemComponent } from './navbarcomponents/navbaritem/navbaritem.component';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { ColorPickerComponent } from './color-picker/color-picker.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbaritemComponent, NgFor, FormsModule, ColorPickerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'my-app';
  color:string = '#123bdc';

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
