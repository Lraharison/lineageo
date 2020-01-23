import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Build } from '../entities/build';
import { Stat } from '../entities/stat';

@Injectable()
export class LineageosService {

  builds: Build[] = [];

  constructor(private readonly httpClient: HttpClient) { }

  getBuilds(): Observable<Build[]> {
    if (this.builds.length === 0) {
      return this.httpClient.get<Build[]>(environment.apiUrl).pipe(
        tap(_ => this.logInfo('fetched builds')),
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
      tap(_ => this.logInfo(`fetched device info for ${ device }`)),
      map(builds => builds.find(b => b.device === device)),
      catchError(err => {
        this.logError('getDeviceInfo', err);
        return of(null);
      })
    );
  }

  getBuildStats(): Observable<Stat[]> {
    return this.getBuilds().pipe(
      tap(_ => this.logInfo('fetched builds for stat')),
      map(builds => this.createBuildStats(builds)),
      catchError(err => {
        this.logError('getDeviceInfo', err);
        return of([]);
      })
    );

  }
  logInfo(message: string): void {
    console.log(`Lineageo service: ${ message }`);
  }
  logError(operation: string, error: Error): void {
    console.error(`${ operation } failed: ${ error.message }`);
  }

  private createBuildStats(builds: Build[]): Stat[] {
    const result: Stat[] = [];
    const stats = new Map<string, number>();
    builds.forEach(build => {
      if (stats.has(build.date)) {
        stats.set(build.date, stats.get(build.date) + build.size);
      } else {
        stats.set(build.date, build.size);
      }
    });
    for (const [k, v] of stats) {
      const stat: Stat = {
        name: k,
        value: v
      } as Stat;
      result.push(stat);
    }
    return result;
  }
}
