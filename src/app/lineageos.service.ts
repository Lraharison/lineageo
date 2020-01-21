import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { BuildApi } from './build-api';
import { ConverterService } from './converter.service';
import { Build } from './builds/build';

@Injectable({
  providedIn: 'root'
})
export class LineageosService {

  builds: Build[] = [];

  private readonly apiUrl = 'https://lineageos-on-ipfs.com/ajax/devices.php';

  constructor(
    private readonly httpClient: HttpClient,
    private readonly converter: ConverterService
  ) { }

  getBuilds(): Observable<Build[]> {
    if (this.builds.length === 0) {
      return this.httpClient.get<BuildApi[]>(this.apiUrl).pipe(
        tap(_ => this.logInfo('fetched builds')),
        map(objs => {
          this.builds = this.converter.objectsApiToObjectsComponent(objs);
          return this.builds;
        }),
        catchError(err => {
          this.logError('getBuilds', err);
          return of([]);
        })
      );
    }
    return of(this.builds);
  }

  getDeviceInfo(device: string): Observable<Build> {
    return this.getBuilds().pipe(
      tap(_ => this.logInfo(`fetched device info for ${device}`)),
      map(builds => builds.find(b => b.device === device)),
      catchError(err => {
        this.logError('getDeviceInfo', err);
        return of(null);
      })
    );
  }

  logInfo(message: string): void {
    console.log(`Lineageo service: ${message}`);
  }

  logError(operation: string, error: Error): void {
    console.error(`${operation} failed: ${error.message}`);
  }
}
