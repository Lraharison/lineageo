import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { TranslateService } from '@ngx-translate/core';
import { LineageosService } from '../../services/lineageos.service';
import { Build } from '../../entities/build';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {

  build: Build;
  constructor(
    private readonly route: ActivatedRoute,
    private readonly location: Location,
    private readonly service: LineageosService,
    private readonly translate: TranslateService
  ) {}

  ngOnInit(): void {
    const device = this.route.snapshot.paramMap.get('device');
    this.service.getDeviceInfo(device).subscribe(build => this.build = build);
  }

  goBack(): void {
    this.location.back();
  }
}