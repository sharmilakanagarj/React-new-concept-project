import type { Accounts, RecentTransaction } from '../Interfaces/Interface';
import { Wallet, TrendingUp, Building, Home,  } from 'lucide-react'; 

export const accounts: Accounts[] = [
  {
    type: 'current',
    balance: 12453.67,
    change: 234.56,
    icon: Wallet,
    color: 'bg-blue-500',
  },
  {
    type: 'savings',
    balance: 45678.90,
    change: 1250.00,
    icon: TrendingUp,
    color: 'bg-teal-500',
  },
  {
    type: 'investment',
    balance: 87432.12,
    change: -432.45,
    icon: Building,
    color: 'bg-purple-500',
  },
  {
    type: 'mortgage',
    balance: -245678.00,
    change: -876.54,
    icon: Home,
    color: 'bg-orange-500',
  },
];

export const recentTransactions: RecentTransaction[] = [
  {
    merchant: 'Whole Foods Market',
    amount: -89.34,
    date: '2025-11-09',
    category: 'Groceries',
  },
  {
    merchant: 'Netflix Subscription',
    amount: -15.99,
    date: '2025-11-08',
    category: 'Entertainment',
  },
  {
    merchant: 'Salary Deposit',
    amount: 3500.00,
    date: '2025-11-07',
    category: 'Income',
  },
  {
    merchant: 'Electric Company',
    amount: -124.56,
    date: '2025-11-06',
    category: 'Utilities',
  },
  {
    merchant: 'Italian Restaurant',
    amount: -67.80,
    date: '2025-11-05',
    category: 'Dining',
  },
];
