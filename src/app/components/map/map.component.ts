import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  latitude = 52.250;
  longitude = 22.566;
  zoom = 6;

  constructor() {
  }

  onChoseLocation(event) {
    console.log(event);
  }

  up() {
    this.latitude += 0.1;
  }

  down() {
    this.latitude -= 0.1;
  }

  left() {
    this.longitude -= 0.1;
  }

  right() {
    this.longitude += 0.1;
  }

  zoomIn() {
    this.zoom++;
  }

  zoomOut() {
    this.zoom--;
  }


  ngOnInit() {
  }

}
