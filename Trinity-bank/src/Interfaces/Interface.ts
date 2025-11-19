import type { LucideIcon } from "lucide-react";
export interface Accounts {
    type: string;
    balance: number;
    change: number;
    icon: LucideIcon;
    color: string;
}

export interface RecentTransaction {
    merchant: string;
    amount: number;
    date: string;
    category: string;
}

export interface Transaction {
    id: number;
    date: string;
    merchant: string;
    category: string;
    amount: number;
    type: 'debit' | 'credit';
    status: 'completed' | 'pending';
    location: string;
}
 
export interface CategoryData {
    name: string;
    value: number;
    color: string;
}

export interface TrendData {
    month: string;
    groceries: number;
    entertainment: number;
    utilities: number;
    shopping: number;
    dining: number;
    transport: number;
}

export interface MerchantData {
    name: string;
    category: string;
    amount:number;
    transactions:number;
    logo:LucideIcon;
}

export interface Insights {
    type:string;
    category:string;
    percentage:number;
    message:string;
}

export interface Budgets {
    category: string;
    budget:number;
    spent:number;
    color:string;
}

export interface Goal {
    name: string;
    target: number;
    current:number;
    monthlyContribution:number;
    targetDate:string;
    icon: LucideIcon;
    color:string;
    status:string;
}