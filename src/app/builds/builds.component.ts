import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { LineageosService } from '../lineageos.service';
import { Build } from './build';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-builds',
  templateUrl: './builds.component.html',
  styleUrls: ['./builds.component.css']
})
export class BuildsComponent implements OnInit {
  displayedColumns: string[] = ['device', 'version', 'filename', 'size', 'date'];
  dataSource = new MatTableDataSource<Build>([]);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private service: LineageosService) { }

  ngOnInit() {
    this.getBuilds();
  }

  doFilter(filter: string): void {
    if (filter) {
      this.dataSource.filter = filter;
    }
  }

  getBuilds(): void {
    this.service.getBuilds().subscribe(builds => {
      this.dataSource = new MatTableDataSource<Build>(builds);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
}
