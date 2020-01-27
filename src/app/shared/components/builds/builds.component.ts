import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { TranslateService } from '@ngx-translate/core';
import { LineageosService } from '../../services/lineageos.service';
import { Build } from '../../entities/build';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-builds',
  templateUrl: './builds.component.html',
  styleUrls: ['./builds.component.scss']
})
export class BuildsComponent implements OnInit {
  displayedColumns: string[] = ['device', 'version', 'filename', 'size', 'date'];
  dataSource = new MatTableDataSource<Build>([]);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  ipfsUrl: string = environment.ipfsUrl;

  constructor(
    private readonly service: LineageosService,
    private readonly translate: TranslateService) {}

  ngOnInit(): void {
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
