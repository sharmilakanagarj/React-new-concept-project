export type Language = 'EN' | 'NL';

export const translations: Record<Language, {
  overview: string;
  transactions: string;
  insights: string;
  budgets: string;
  goals: string;
  settings: string;
  appTitle: string;
}> = {
  EN: {
    overview: 'Overview',
    transactions: 'Transactions',
    insights: 'Insights',
    budgets: 'Budgets',
    goals: 'Goals',
    settings: 'Settings',
    appTitle: 'Trinity Trust Bank',
  },
   NL: {
      overview: 'Overzicht',
      transactions: 'Transacties',
      insights: 'Inzichten',
      budgets: 'Budgetten',
      goals: 'Doelen',
      settings: 'Instellingen',
      appTitle: 'FinanceHub',
    }
};
