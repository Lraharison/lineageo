import { Component, OnInit } from '@angular/core';
import { LineageosService } from '../lineageos.service';
import { Build } from '../builds/build';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {

  build: Build;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private service: LineageosService
  ) { }

  ngOnInit() {
    const device = this.route.snapshot.paramMap.get('device');
    this.service.getDeviceInfo(device).subscribe(build => this.build = build);
  }

  goBack() {
    this.location.back();
  }
}