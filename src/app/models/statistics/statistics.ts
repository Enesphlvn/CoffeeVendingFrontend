export interface Statistics {
  dailyRevenue: number;
  monthlyRevenue: number;
  weeklyRevenue: number;
  weeklyOrderCount: number;
  dailyOrderCount: number;
  monthlyOrderCount: number;
  topSoldProduct: string[];
  leastSoldProduct: string[];
  topOrderingUserNames: string[];
  busiestOrderHours: number[];
  busiestOrderDaysOfWeek: string[];
  lowStockGeneralContent: string[];
  outOfStockProducts: string[];
}
