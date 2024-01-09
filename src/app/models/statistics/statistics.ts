import { ProductStatistics } from "./productStatistics";
import { UserStatistics } from "./userStatistics";

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
  topOrderingHour: number;
  LeastOrderingHour: number;
  topOrderingDayOfWeek: string;
  leastOrderingDayOfWeek: string;
  lowStockGeneralContents: string[];
  outOfStockProducts: string[];
}
