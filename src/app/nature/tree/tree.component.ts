import { Component } from '@angular/core';
import { LeafComponent } from '../leaf/leaf.component';
import { OnInit } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-tree',
  standalone: true,
  imports: [LeafComponent, NgFor],
  templateUrl: './tree.component.html',
  styleUrl: './tree.component.css'
})
export class TreeComponent implements OnInit {

  leaves: { positionX: number; duration: number }[] = [];

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


}
