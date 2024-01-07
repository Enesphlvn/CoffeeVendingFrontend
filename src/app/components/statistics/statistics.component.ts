import { Component, OnInit } from '@angular/core';
import { Statistics } from '../../models/statistics/statistics';
import { StatisticsService } from '../../services/statistics.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.css'
})
export class StatisticsComponent implements OnInit {
  statistics: Statistics;
  dataLoaded: boolean = false;

  constructor(private statisticsService: StatisticsService) {}

  ngOnInit(): void {
    this.getStatistics();
  }

  getStatistics() {
    this.statisticsService.getAllStatistics().subscribe((response) => {
      this.statistics = response.data;
      this.dataLoaded = true;
    })
  }
}
