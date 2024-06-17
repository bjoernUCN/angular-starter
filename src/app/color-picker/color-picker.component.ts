import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
@Component({
  selector: 'app-color-picker',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './color-picker.component.html',
  styleUrl: './color-picker.component.css'
})
export class ColorPickerComponent {
  @ViewChild('colorCanvas') colorCanvas!: ElementRef<HTMLCanvasElement>;
  selectedColor: string = 'rgb(0, 0, 0)';
  complementaryColor: string = '';
  hue: number = 0;
  isPicking: boolean = false;
  pointerX: number = 0;
  pointerY: number = 0;

  ngAfterViewInit(): void {
    this.drawColorBox();
  }

  drawColorBox(): void {
    const canvas = this.colorCanvas.nativeElement;
    const ctx = canvas.getContext('2d');

    if (ctx) {
      const width = canvas.width;
      const height = canvas.height;

      // Clear canvas
      ctx.clearRect(0, 0, width, height);

      // Create gradient
      const gradientH = ctx.createLinearGradient(0, 0, width, 0);
      gradientH.addColorStop(0, 'white');
      gradientH.addColorStop(1, `hsl(${this.hue}, 100%, 50%)`);

      ctx.fillStyle = gradientH;
      ctx.fillRect(0, 0, width, height);

      const gradientV = ctx.createLinearGradient(0, 0, 0, height);
      gradientV.addColorStop(0, 'rgba(0,0,0,0)');
      gradientV.addColorStop(1, 'black');

      ctx.fillStyle = gradientV;
      ctx.fillRect(0, 0, width, height);

      // Draw pointer
      if (this.pointerX && this.pointerY) {
        this.drawPointer(ctx, this.pointerX, this.pointerY);
      }
    }
  }

  drawPointer(ctx: CanvasRenderingContext2D, x: number, y: number): void {
    const pointerRadius = 5;
    const outerRadius = pointerRadius + 2;

    // Draw outer ring (complementary color)
    ctx.strokeStyle = this.complementaryColor;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(x, y, outerRadius, 0, Math.PI * 2);
    ctx.stroke();

    // Draw inner ring (selected color)
    ctx.strokeStyle = this.selectedColor;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(x, y, pointerRadius, 0, Math.PI * 2);
    ctx.stroke();
  }

  getColorAtPosition(x: number, y: number): string {
    const canvas = this.colorCanvas.nativeElement;
    const ctx = canvas.getContext('2d');

    if (ctx) {
      const imageData = ctx.getImageData(x, y, 1, 1).data;
      const r = imageData[0];
      const g = imageData[1];
      const b = imageData[2];
      return `RGB(${r}, ${g}, ${b})`;
    }
    return '#000';
  }

  startPicking(event: MouseEvent): void {
    this.isPicking = true;
    this.pickColor(event);
  }

  pickColor(event: MouseEvent): void {
    if (this.isPicking) {
      const rect = this.colorCanvas.nativeElement.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      this.selectedColor = this.getColorAtPosition(x, y);
      this.complementaryColor = this.getComplementaryColor(this.selectedColor);
      this.pointerX = x;
      this.pointerY = y;
      this.drawColorBox();  // Redraw the canvas to update the pointer
    }
  }

  stopPicking(): void {
    this.isPicking = false;
  }

  updateHue(): void {
    this.drawColorBox();
  }

  getComplementaryColor(rgb: string): string {
    const rgbArray = rgb.match(/\d+/g);
    if (rgbArray) {
      const r = 255 - parseInt(rgbArray[0], 10);
      const g = 255 - parseInt(rgbArray[1], 10);
      const b = 255 - parseInt(rgbArray[2], 10);
      return `rgb(${r}, ${g}, ${b})`;
    }
    return '#000';
  }
}
