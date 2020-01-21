import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { BuildApi } from './build-api';
import { Observable, of } from 'rxjs';
import { ConverterService } from './converter.service';
import { Build } from './builds/build';

@Injectable({
  providedIn: 'root'
})
export class LineageosService {

  private apiUrl = 'https://lineageos-on-ipfs.com/ajax/devices.php';

  builds: Build[] = [];

  constructor(
    private httpClient: HttpClient,
    private converter: ConverterService
  ) { }

  getBuilds(): Observable<Build[]> {
    if (this.builds.length === 0) {
      return this.httpClient.get<BuildApi[]>(this.apiUrl).pipe(
        tap(_ => this.log('fetched builds')),
        map(objs => {
          this.builds = this.converter.objectsApiToObjectsComponent(objs);
          return this.builds;
        }),
        catchError(this.handleError<Build[]>('getBuilds', []))
      )
    }
    return of(this.builds);
  }
 

  getDeviceInfo(device: string): Observable<Build> {
    return this.getBuilds().pipe(
      tap(_ => this.log(`fetched device info for ${device}`)),
      map(builds => builds.find(b => b.device === device)),
      catchError(this.handleError<Build>('getDeviceInfo'))
    );
  }

  log(message: string): void {
    console.log(`Lineageo service: ${message}`);
  }

  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}