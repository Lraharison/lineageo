import { Component, OnInit } from '@angular/core';
import { LineageosService } from '../../services/lineageos.service';
import { Stat } from '../../entities/stat';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent implements OnInit {
  stats: Stat[];
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  yAxisLabel = 'Date';
  showYAxisLabel = true;
  xAxisLabel = 'File size';
  view: number[] = [1100, 850];

  constructor(private readonly lineageosService: LineageosService) { }

  ngOnInit(): void {
    this.lineageosService.getBuildStats().subscribe(stats => this.stats = stats);
  }
}
