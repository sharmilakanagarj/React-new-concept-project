export type Language = 'EN' | 'NL' ; 

export interface OverviewTranslations {
  title: string;
  totalBalance: string;
  accounts: string;
  current: string;
  savings: string;
  investment: string;
  mortgage: string;
  recentActivity: string;
  quickActions: string;
  transferMoney: string;
  payBills: string;
  viewStatements: string;
}  
 
 export const overviewTranslations: Record<Language, OverviewTranslations> = {
  EN: {
    title: 'Account Overview',
    totalBalance: 'Total Balance',
    accounts: 'Accounts',
    current: 'Current Account',
    savings: 'Savings Account',
    investment: 'Investment Portfolio',
    mortgage: 'Mortgage',
    recentActivity: 'Recent Activity',
    quickActions: 'Quick Actions',
    transferMoney: 'Transfer Money',
    payBills: 'Pay Bills',
    viewStatements: 'View Statements',
  },
  NL: {
    title: 'Accountoverzicht',
    totalBalance: 'Totaal Saldo',
    accounts: 'Rekeningen',
    current: 'Betaalrekening',
    savings: 'Spaarrekening',
    investment: 'Beleggingsportefeuille',
    mortgage: 'Hypotheek',
    recentActivity: 'Recente Activiteit',
    quickActions: 'Snelle Acties',
    transferMoney: 'Geld Overmaken',
    payBills: 'Rekeningen Betalen',
    viewStatements: 'Afschriften Bekijken',
  },
};

 
