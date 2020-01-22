import { Injectable } from '@angular/core';
import { Build } from '../entities/build';
import { BuildApi } from '../entities/build-api';
import { environment } from '../../../environments/environment';

@Injectable()
export class ConverterService {

  objectApiToObjectComponent(o: BuildApi): Build {
    if (o) {
      const b = new Build();
      b.version = o.version;
      b.filename = o.filename;
      b.filepath = `${environment.ipfsUrl}/${o.ipfs}/${o.filename}`;
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
    return `${Math.round(bytes / Math.pow(1024, i))} ${sizes[i]}`;
  }
}
