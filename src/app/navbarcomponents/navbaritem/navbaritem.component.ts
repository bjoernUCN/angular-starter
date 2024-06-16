import { Component, Input, HostBinding } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-navbaritem',
  standalone: true,
  imports: [NgClass],
  templateUrl: './navbaritem.component.html',
  styleUrl: './navbaritem.component.css',
})
export class NavbaritemComponent {
  @Input() isEnd = false;
  isClicked = false;

  toggleClicked(): void {
    this.isClicked = !this.isClicked;
  }
}
