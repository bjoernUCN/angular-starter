import { Component, Input, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-leaf',
  standalone: true,
  imports: [],
  templateUrl: './leaf.component.html',
  styleUrl: './leaf.component.css'
})
export class LeafComponent {
  @Input() positionX: number = 0;
  @Input() duration: number = 0;
  private isDragging = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    this.isDragging = true;
    const rect = this.el.nativeElement.firstElementChild.getBoundingClientRect();
    this.renderer.setStyle(this.el.nativeElement.firstElementChild, 'animation-play-state', 'paused'); // Pause the animation
    this.renderer.setStyle(this.el.nativeElement.firstElementChild, 'cursor', 'grabbing');
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.isDragging) {
      
    }
  }

  @HostListener('document:mouseup')
  onMouseUp() {
    this.isDragging = false;
    this.renderer.setStyle(this.el.nativeElement.firstElementChild, 'animation-play-state', 'running'); // Resume the animation
    this.renderer.setStyle(this.el.nativeElement.firstElementChild, 'cursor', 'grab');
  }
}
