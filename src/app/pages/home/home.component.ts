import {Inject, Component, AfterViewInit, ElementRef, HostListener} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', './home-media-queries.component.scss'],
})
export class HomeComponent implements AfterViewInit {
  public desc = 'ChrisTravels';
  public randomDiv: any;
  public isOpen = false;
  public isSticky = false;
  public animation = false;
  public year = new Date().getFullYear();

  constructor(private elRef: ElementRef,
              @Inject(DOCUMENT) private doc: Document) {
  }

  @HostListener('window:scroll', ['$event'])
  public onWindowScroll() {
    const num = this.doc.documentElement.scrollTop || this.doc.body.scrollTop || 0;
    if (num > 112) {
      this.isSticky = true;
    } else if (this.isSticky && num < 64) {
      this.isSticky = false;
    }
  }

  public onAnimation() {
    console.log(this.animation);
    return this.animation = true;
  }

  public outAnimation() {
    console.log(this.animation);
    return this.animation = false;
  }

  public openMenu() {
    return this.isOpen = true;
  }

  public closeMenu() {
    return this.isOpen = false;
  }

  getDesc(desc: string) {
    return desc;
  }

  updateDesc(newDesc: string): void {
    setTimeout(() => {
      this.desc = newDesc;
    }, 100);
  }

  hover($event: any) {
    if ($event.type === 'mouseover') {
      this.randomDiv.style.opacity = 0;
      $event.currentTarget.style.opacity = 1;
    } else {
      this.randomDiv.style.opacity = 0;
      $event.currentTarget.style.opacity = 0;
    }
  }

  public randomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  ngAfterViewInit() {
    this.randomDiv = this.elRef.nativeElement.getElementsByClassName('overlay')[this.randomNumber(0, 5)];
    this.randomDiv.style.opacity = 1;
    console.log(this.randomDiv);
  }

  public navigateOffer() {
    window.location.href = '/oferta';
  }
}
