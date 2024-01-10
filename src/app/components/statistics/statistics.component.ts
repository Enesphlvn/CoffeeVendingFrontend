import { Component, OnInit } from '@angular/core';
import { Statistics } from '../../models/statistics/statistics';
import { StatisticsService } from '../../services/statistics.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.css',
})
export class StatisticsComponent implements OnInit {
  statistics: Statistics;
  dataLoaded: boolean = false;
  revenueChartLabel: string[] = [];
  countChartLabel: string[] = [];
  topAndLeastSoldproductChartLabel: string[] = [];
  topAndLeastUserSoldChartLabel: string[] = [];
  dayOfWeekChartLabel: string[] = [];
  revenueChartData: any;
  countChartData: any;
  topAndLeastSoldProductChartData: any;
  topAndLeastUserSoldChartData: any;
  dayOfWeekChartData: any;

  constructor(private statisticsService: StatisticsService) {}

  ngOnInit(): void {
    this.getStatistics();
    this.revenueChartFilled();
    this.countChartFilled();
    this.topAndLeastSoldChartFilled();
    this.topAndLeastUserSoldChartFilled();
    this.dayOfWeekChartFilled();
  }

  getStatistics() {
    this.statisticsService.getAllStatistics().subscribe((response) => {
      this.statistics = response.data;
      this.dataLoaded = true;
    });
  }

  revenueChartFilled() {
    this.statisticsService.getAllStatistics().subscribe((response) => {
      this.statistics = response.data;
      const daily = this.statistics.dailyRevenue;
      const weekly = this.statistics.weeklyRevenue;
      const monthly = this.statistics.monthlyRevenue;

      this.revenueChartLabel.push('Kazanç Tablosu');

      this.revenueChartData = [
        { data: [daily], label: 'Günlük kazanç' },
        { data: [weekly], label: 'Haftalık kazanç' },
        { data: [monthly], label: 'Aylık kazanç' },
      ];
    });
    this.dataLoaded = true;
  }

  countChartFilled() {
    this.statisticsService.getAllStatistics().subscribe((response) => {
      this.statistics = response.data;
      const daily = this.statistics.dailyOrderCount;
      const weekly = this.statistics.weeklyOrderCount;
      const monthly = this.statistics.monthlyOrderCount;

      this.countChartLabel.push('Satış Miktar Tablosu');

      this.countChartData = [
        { data: [daily], label: 'Günlük satış miktarı' },
        { data: [weekly], label: 'Haftalık satış miktarı' },
        { data: [monthly], label: 'Aylık satış miktarı' },
      ];
    });
    this.dataLoaded = true;
  }

  topAndLeastSoldChartFilled() {
    this.statisticsService.getAllStatistics().subscribe((response) => {
      this.statistics = response.data;
      const topProduct = this.statistics.topSoldProduct;
      const leastProduct = this.statistics.leastSoldProduct;

      this.topAndLeastSoldproductChartLabel.push(
        'Ürün Satış Adet Tablosu (En çok / En az)'
      );

      this.topAndLeastSoldProductChartData = [
        { data: [topProduct.quantity], label: topProduct.productName },
        { data: [leastProduct.quantity], label: leastProduct.productName },
      ];
    });
    this.dataLoaded = true;
  }

  topAndLeastUserSoldChartFilled() {
    this.statisticsService.getAllStatistics().subscribe((response) => {
      this.statistics = response.data;
      const topUser = this.statistics.topOrderingUser;
      const leastUser = this.statistics.leastOrderingUser;

      this.topAndLeastUserSoldChartLabel.push(
        'Kullanıcı Sipariş Adet Tablosu (En çok / En az)'
      );

      this.topAndLeastUserSoldChartData = [
        { data: [topUser.quantity], label: topUser.userName },
        { data: [leastUser.quantity], label: leastUser.userName },
      ];
    });
    this.dataLoaded = true;
  }

  dayOfWeekChartFilled() {
    this.statisticsService.getAllStatistics().subscribe((response) => {
      this.statistics = response.data;
      const sunday = this.statistics.sunday;
      const monday = this.statistics.monday;
      const tuesday = this.statistics.tuesday;
      const wednesday = this.statistics.wednesday;
      const thursday = this.statistics.thursday;
      const friday = this.statistics.friday;
      const saturday = this.statistics.saturday;

      this.dayOfWeekChartLabel.push(
        'Haftanın Günlerine Göre Satış Miktar Tablosu'
      );

      this.dayOfWeekChartData = [
        { data: [sunday.quantity], label: sunday.dayName },
        { data: [monday.quantity], label: monday.dayName },
        { data: [tuesday.quantity], label: tuesday.dayName },
        { data: [wednesday.quantity], label: wednesday.dayName },
        { data: [thursday.quantity], label: thursday.dayName },
        { data: [friday.quantity], label: friday.dayName },
        { data: [saturday.quantity], label: saturday.dayName },
      ];
    });
    this.dataLoaded = true;
  }
}
