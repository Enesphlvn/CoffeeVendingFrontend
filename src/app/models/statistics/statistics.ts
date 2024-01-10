import { DayOfWeekStatistics } from './dayOfWeekStatistics';
import { LowStockGeneralContent } from './lowStockGeneralContent';
import { ProductStatistics } from './productStatistics';
import { UserStatistics } from './userStatistics';

export interface Statistics {
  dailyRevenue: number;
  monthlyRevenue: number;
  weeklyRevenue: number;
  weeklyOrderCount: number;
  dailyOrderCount: number;
  monthlyOrderCount: number;
  topSoldProduct: ProductStatistics;
  leastSoldProduct: ProductStatistics;
  topOrderingUser: UserStatistics;
  leastOrderingUser: UserStatistics;
  sunday: DayOfWeekStatistics;
  monday: DayOfWeekStatistics;
  tuesday: DayOfWeekStatistics;
  wednesday: DayOfWeekStatistics;
  thursday: DayOfWeekStatistics;
  friday: DayOfWeekStatistics;
  saturday: DayOfWeekStatistics;
  lowStockGeneralContent: LowStockGeneralContent[];
  outOfStockProducts: string[];
}
