import { Home, CreditCard, TrendingUp, Target, Settings } from 'lucide-react';

export interface SidebarItem {
  key: 'overview' | 'transactions' | 'insights' | 'budgets' | 'goals' | 'settings';
  icon: React.ElementType;
  path: string;
}

export const SidebarData: SidebarItem[] = [
  { key: 'overview', icon: Home, path: '/overview' },
  { key: 'transactions', icon: CreditCard, path: '/transactions' },
  { key: 'insights', icon: TrendingUp, path: '/insights' },
  { key: 'budgets', icon: Target, path: '/budgets' },
  { key: 'goals', icon: Target, path: '/goals' },
  { key: 'settings', icon: Settings, path: '/settings' },
];
