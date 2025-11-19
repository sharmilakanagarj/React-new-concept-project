import { Box, Fuel, ShoppingCart, Tv, UtensilsCrossed } from "lucide-react";
import type { CategoryData, TrendData, MerchantData, Insights } from "../Interfaces/Interface";

export type Language = 'EN' | 'NL' ; 
const language: Language = 'EN';

export const categoryData :CategoryData[] = [
    { name: 'Groceries', value: 456.78, color: '#3b82f6' },
    { name: 'Dining', value: 234.56, color: '#8b5cf6' },
    { name: 'Utilities', value: 345.67, color: '#ec4899' },
    { name: 'Entertainment', value: 123.45, color: '#f59e0b' },
    { name: 'Transport', value: 187.90, color: '#10b981' },
    { name: 'Shopping', value: 298.32, color: '#06b6d4' },
];

export const trendData: TrendData[]=[
    { month: 'Jun', groceries: 420, dining: 180, utilities: 340, entertainment: 100, transport: 160, shopping: 250 },
    { month: 'Jul', groceries: 450, dining: 195, utilities: 345, entertainment: 110, transport: 175, shopping: 270 },
    { month: 'Aug', groceries: 435, dining: 210, utilities: 338, entertainment: 125, transport: 168, shopping: 285 },
    { month: 'Sep', groceries: 448, dining: 220, utilities: 342, entertainment: 115, transport: 182, shopping: 292 },
    { month: 'Oct', groceries: 442, dining: 228, utilities: 346, entertainment: 120, transport: 185, shopping: 295 },
    { month: 'Nov', groceries: 457, dining: 235, utilities: 346, entertainment: 123, transport: 188, shopping: 298 },
];

export const merchantData: MerchantData[]=[
    { name: 'Albert Heijn', category: 'Groceries', amount: 234.56, transactions: 12, logo: ShoppingCart },
    { name: 'Shell', category: 'Transport', amount: 187.90, transactions: 8, logo: Fuel },
    { name: 'Italian Restaurant', category: 'Dining', amount: 156.78, transactions: 4, logo: UtensilsCrossed  },
    { name: 'Netflix', category: 'Entertainment', amount: 47.97, transactions: 3, logo: Tv },
    { name: 'Amazon', category:'Shopping', amount: 298.32, transactions: 7, logo: Box },
];

export const insights: Insights[]=[
     {
      type: 'increase',
      category: 'Dining',
      percentage: 20,
      message: language === 'EN' 
        ? 'Dining expenses increased by 20% compared to last month'
        : 'Restaurantuitgaven stegen met 20% ten opzichte van vorige maand'
    },
    {
      type: 'decrease',
      category: 'Transport',
      percentage: 8,
      message: language === 'EN'
        ? 'Transport costs decreased by 8% this month'
        : 'Transportkosten daalden met 8% deze maand'
    },
];
