import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { LineageosService } from '../lineageos.service';
import { Build } from '../builds/build';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {

  build: Build;
  constructor(
    private readonly route: ActivatedRoute,
    private readonly location: Location,
    private readonly service: LineageosService
  ) { }

  ngOnInit(): void {
    const device = this.route.snapshot.paramMap.get('device');
    this.service.getDeviceInfo(device).subscribe(build => this.build = build);
  }

  goBack(): void {
    this.location.back();
  }
}
