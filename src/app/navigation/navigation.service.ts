import { Injectable } from '@angular/core';
import { NavbaritemComponent } from './navbaritem/navbaritem.component';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor() { }
  private clickedSource = new Subject<NavbaritemComponent>();

  clicked$ = this.clickedSource.asObservable();

  notifyClick(navbarItem: NavbaritemComponent): void {
    this.clickedSource.next(navbarItem);
  }


}
