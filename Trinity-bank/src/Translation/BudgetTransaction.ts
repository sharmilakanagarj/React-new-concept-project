export type Language = 'EN' | 'NL' ; 

export interface BudgetTransaction {
      title: string;
      subtitle: string;
      monthlyBudgets: string;
      spent: string;
      of: string;
      remaining: string;
      exceeded: string;
      onTrack: string;
      nearLimit: string;
      overBudget: string;
      addBudget: string;
      groceries: string;
      dining: string;
      utilities: string;
      entertainment: string;
      transport: string;
      shopping: string;
      totalBudget:string;
      totalSpent: string;
      warning: string;
      success: string;
}

export const budgetTransactionTranslations: Record<Language, BudgetTransaction> = {
     EN: {
      title: 'Budget Tracking',
      subtitle: 'Monitor your spending against set budgets',
      monthlyBudgets: 'Monthly Budgets',
      spent: 'spent',
      of: 'of',
      remaining: 'remaining',
      exceeded: 'exceeded',
      onTrack: 'On Track',
      nearLimit: 'Near Limit',
      overBudget: 'Over Budget',
      addBudget: 'Add Budget',
      groceries: 'Groceries',
      dining: 'Dining Out',
      utilities: 'Utilities',
      entertainment: 'Entertainment',
      transport: 'Transport',
      shopping: 'Shopping',
      totalBudget: 'Total Monthly Budget',
      totalSpent: 'Total Spent',
      warning: 'Warning',
      success: 'Success',
    },
    NL: {
      title: 'Budgetbewaking',
      subtitle: 'Bewaak uw uitgaven ten opzichte van ingestelde budgetten',
      monthlyBudgets: 'Maandelijkse Budgetten',
      spent: 'uitgegeven',
      of: 'van',
      remaining: 'resterend',
      exceeded: 'overschreden',
      onTrack: 'Op Schema',
      nearLimit: 'Bijna Limiet',
      overBudget: 'Over Budget',
      addBudget: 'Budget Toevoegen',
      groceries: 'Boodschappen',
      dining: 'Uit Eten',
      utilities: 'Nutsvoorzieningen',
      entertainment: 'Amusement',
      transport: 'Transport',
      shopping: 'Winkelen',
      totalBudget: 'Totaal Maandelijks Budget',
      totalSpent: 'Totaal Uitgegeven',
      warning: 'Waarschuwing',
      success: 'Succes',
    }
};
       