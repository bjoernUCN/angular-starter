import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbaritemComponent } from './navigation/navbaritem/navbaritem.component';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { RouterModule } from '@angular/router';
import { LeafComponent } from './nature/leaf/leaf.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbaritemComponent, NgFor, FormsModule, ColorPickerComponent, RouterModule, LeafComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'AAEN RESUME';
  leaves: { positionX: number; duration: number }[] = [];

  constructor(){
    this.LogOnStartup();
  }

  ngOnInit() {
    this.createLeaves();
  }

  createLeaves() {
    for (let i = 0; i < 16; i++) {
      this.leaves.push({
        positionX: Math.random() * 100,
        duration: 5 + Math.random() * 6
      });
    }
  }

  createRange(number: Number){
    return new Array(number).fill(0)
      .map((n, index) => index + 1);
  }

  LogOnStartup(){
    console.log("Application has launched");
  }
  
}
