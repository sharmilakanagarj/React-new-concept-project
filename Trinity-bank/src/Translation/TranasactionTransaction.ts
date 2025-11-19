 export type Language = 'EN' | 'NL' ; 
 
export interface TranasactionTransaction {
  title: string;
  search: string;
  category: string;
  type: string;
  all: string;
  export: string;
  date: string;
  merchant: string;
  amount: string;
  status: string;
  groceries: string;
  dining: string;
  utilities: string;
  entertainment: string;
  transport: string;
  shopping: string;
  income: string;
  debit: string;
  credit: string;
  completed: string;
  pending: string;
}  

 export const TranasactionTransaction: Record<Language, TranasactionTransaction> = {

 EN: {
      title: 'Transaction Management',
      search: 'Search transactions...',
      category: 'Category',
      type: 'Type',
      all: 'All',
      export: 'Export',
      date: 'Date',
      merchant: 'Merchant',
      amount: 'Amount',
      status: 'Status',
      groceries: 'Groceries',
      dining: 'Dining Out',
      utilities: 'Utilities',
      entertainment: 'Entertainment',
      transport: 'Transport',
      shopping: 'Shopping',
      income: 'Income',
      debit: 'Debit',
      credit: 'Credit',
      completed: 'Completed',
      pending: 'Pending',
    },

      NL: {
      title: 'Transactiebeheer',
      search: 'Zoek transacties...',
      category: 'Categorie',
      type: 'Type',
      all: 'Alle',
      export: 'Exporteren',
      date: 'Datum',
      merchant: 'Handelaar',
      amount: 'Bedrag',
      status: 'Status',
      groceries: 'Boodschappen',
      dining: 'Uit Eten',
      utilities: 'Nutsvoorzieningen',
      entertainment: 'Amusement',
      transport: 'Transport',
      shopping: 'Winkelen',
      income: 'Inkomen',
      debit: 'Debet',
      credit: 'Credit',
      completed: 'Voltooid',
      pending: 'In Behandeling',
    }
  };