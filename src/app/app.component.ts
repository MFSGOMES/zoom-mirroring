import { AfterViewInit, Component, ViewChild } from '@angular/core';

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

  @ViewChild('getMirrored') getMirrored!: any;
  @ViewChild('mirrored') mirrored!: any;

  magnification = 2;

  ngAfterViewInit(): void {
    const zoomWhell = document.getElementById("mirroredDiv");
    if(zoomWhell !== null){
        zoomWhell.addEventListener('wheel',(event: WheelEvent)=>{
        const delta = Math.sign(event.deltaY);
        if (delta < 0 && this.magnification <= 5) {
          this.magnification += 0.5;
          this.mirrorImagePosition();
        } else if (delta > 0 && this.magnification >= 0) {
          this.magnification -= 0.5;
          this.mirrorImagePosition();
        }
      })
    }
  }

  mirrorImagePosition() {
    if (this.getMirrored !== undefined && this.mirrored !== undefined) {
      const mirroredParams = [
        'display',
        'fullImageTop',
        'fullImageLeft',
        'magnifiedWidth',
        'magnifiedHeight',
        'lensTop',
        'lensLeft',
        'enableLens',
        'lensBorderRadius',
        'thumbWidth',
        'thumbHeight',
        'lensWidth',
        'lensHeight',
        'fullWidth',
        'fullHeight'
      ];
      
      setTimeout(() => {
  
        mirroredParams.forEach(key => {
        this.getMirrored[key] = this.mirrored[key];
        });
      }, 0);
    }
  }
}
