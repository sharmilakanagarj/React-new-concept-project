export type Language = 'EN' | 'NL' ; 
 
export interface InsightsTransactionTranslations {
      title: string;
      spendingByCategory: string;
      spendingTrends: string;
      topMerchants: string;
      insights: string;
      groceries: string;
      dining: string;
      utilities: string;
      entertainment: string;
      transport: string;
      shopping: string;
      thisMonth: string;
      lastMonth: string;
      increase: string;
      decrease: string;
}


export const insightsTransactionTranslations: Record<Language, InsightsTransactionTranslations> = {
        EN: {
      title: 'Financial Insights',
      spendingByCategory: 'Spending by Category',
      spendingTrends: 'Spending Trends',
      topMerchants: 'Top Merchants',
      insights: 'Key Insights',
      groceries: 'Groceries',
      dining: 'Dining Out',
      utilities: 'Utilities',
      entertainment: 'Entertainment',
      transport: 'Transport',
      shopping: 'Shopping',
      thisMonth: 'This Month',
      lastMonth: 'Last Month',
      increase: 'increase',
      decrease: 'decrease',
    },
    NL: {
      title: 'Financiële Inzichten',
      spendingByCategory: 'Uitgaven per Categorie',
      spendingTrends: 'Uitgaventrends',
      topMerchants: 'Top Handelaren',
      insights: 'Belangrijke Inzichten',
      groceries: 'Boodschappen',
      dining: 'Uit Eten',
      utilities: 'Nutsvoorzieningen',
      entertainment: 'Amusement',
      transport: 'Transport',
      shopping: 'Winkelen',
      thisMonth: 'Deze Maand',
      lastMonth: 'Vorige Maand',
      increase: 'toename',
      decrease: 'afname',
    },
};