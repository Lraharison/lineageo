import { Injectable } from '@angular/core';
import { Build } from './builds/build';
import { BuildApi } from './build-api';

@Injectable({
  providedIn: 'root'
})
export class ConverterService {

  private ipfsUrl: string = 'https://lineageos-on-ipfs.com/ipfs';

  constructor() { }

  objectApiToObjectComponent(o: BuildApi): Build {
    if (o) {
      const b = new Build();
      b.version = o.version;
      b.filename = o.filename;
      b.filepath = `${this.ipfsUrl}/${o.ipfs}/${o.filename}`;
      b.size = this.getSizeMb(o.size);
      b.ipfs = o.ipfs;
      b.device = o.device;
      b.date = o.date;
      return b;
    }
    return null;
  }

  objectsApiToObjectsComponent(objs: BuildApi[]): Build[] {
    return objs.map(o => this.objectApiToObjectComponent(o));
  }

  getSizeMb(bytes): string {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return Math.round(bytes / Math.pow(1024, i)) + ' ' + sizes[i];
  }
}