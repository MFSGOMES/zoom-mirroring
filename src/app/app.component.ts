import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgxImageZoomComponent } from 'ngx-image-zoom';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'zoom-mirroring';

  leftFullresImage =
    'https://wittlock.github.io/ngx-image-zoom/assets/fullres.jpg';
  leftThumbnail = 'https://wittlock.github.io/ngx-image-zoom/assets/thumb.jpg';

  rightFullresImage =
    'https://wittlock.github.io/ngx-image-zoom/assets/fullres.jpg';
  rightThumbnail = 'https://wittlock.github.io/ngx-image-zoom/assets/thumb.jpg';

  @ViewChild('getMirrored') getMirrored!: NgxImageZoomComponent;
  @ViewChild('mirrored') mirrored!: NgxImageZoomComponent;

  magnification = 2;

  ngAfterViewInit(): void {
    const mirroredDiv = document.getElementById('mirroredDiv');
    if (mirroredDiv !== null) {
      mirroredDiv.addEventListener('wheel', (event) => {
        const delta = Math.sign(event.deltaY);
        if (delta < 0 && this.magnification <= 5) {
          this.magnification += 0.5;
          this.mirrorImagePosition();
        } else if (delta > 0 && this.magnification >= 0) {
          this.magnification -= 0.5;
          this.mirrorImagePosition();
        }
      });
    }
  }

  mirrorImagePosition() {
    if (this.getMirrored != undefined && this.mirrored !== undefined) {
      this.getMirrored.display = this.mirrored.display;
      this.getMirrored.fullImageTop = this.mirrored.fullImageTop;
      this.getMirrored.fullImageLeft = this.mirrored.fullImageLeft;
      this.getMirrored.magnifiedWidth = this.mirrored.magnifiedWidth;
      this.getMirrored.magnifiedHeight = this.mirrored.magnifiedHeight;
      this.getMirrored.magnifiedWidth = this.mirrored.magnifiedWidth
      this.getMirrored.magnifiedHeight = this.mirrored.magnifiedHeight
      this.getMirrored.lensTop = this.mirrored.lensTop;
      this.getMirrored.lensLeft = this.mirrored.lensLeft;
      this.getMirrored.enableLens = this.mirrored.enableLens;
      this.getMirrored.lensBorderRadius = this.mirrored.lensBorderRadius;
      this.getMirrored.thumbWidth = this.mirrored.thumbWidth;
      this.getMirrored.thumbHeight = this.mirrored.thumbHeight;
      this.getMirrored.lensWidth = this.mirrored.lensWidth;
      this.getMirrored.lensHeight = this.mirrored.lensHeight;
      this.getMirrored.fullWidth = this.mirrored.fullWidth;
      this.getMirrored.fullHeight = this.mirrored.fullHeight;
    }
  }
}
