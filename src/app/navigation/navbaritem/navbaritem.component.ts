import { Component, Input, HostBinding } from '@angular/core';
import { NgClass } from '@angular/common';
import { Subscription } from 'rxjs';
import { NavigationService } from '../navigation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbaritem',
  standalone: true,
  imports: [NgClass],
  templateUrl: './navbaritem.component.html',
  styleUrl: './navbaritem.component.css',
})
export class NavbaritemComponent {
  @Input() isEnd = false;
  @Input() grouptag: string = '';
  @Input() fallbackRoute: string = '';
  @Input() route: string = '';


  isClicked = false;
  private clickSubscription: Subscription;

  constructor(private navigationService: NavigationService, private router: Router) {
    this.clickSubscription = new Subscription();
  }
  ngOnInit(): void {
    this.clickSubscription = this.navigationService.clicked$.subscribe((clickedItem) => {
      if (clickedItem !== this && clickedItem.grouptag === this.grouptag) {
        this.isClicked = false;
      }
    });
  }

  ngOnDestroy(): void {
    this.clickSubscription.unsubscribe();
  }

  toggleClicked(): void {
    if (this.isClicked) {
      this.router.navigate(['/' + this.fallbackRoute]);
    } else {
      this.router.navigate(['/' + this.route]);
      this.navigationService.notifyClick(this);
    }

    this.isClicked = !this.isClicked;
  }


}