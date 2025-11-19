import type { Transaction } from "../Interfaces/Interface";

export const transactions: Transaction[] = [
  { id: 1, date: '2025-11-10', merchant: 'Whole Foods Market', category: 'Groceries', amount: -89.34, type: 'debit', status: 'completed', location: 'Amsterdam' },
  { id: 2, date: '2025-11-09', merchant: 'Shell Gas Station', category: 'Transport', amount: -54.20, type: 'debit', status: 'completed', location: 'Rotterdam' },
  { id: 3, date: '2025-11-09', merchant: 'Netflix', category: 'Entertainment', amount: -15.99, type: 'debit', status: 'completed', location: 'Online' },
  { id: 4, date: '2025-11-08', merchant: 'Salary Deposit', category: 'Income', amount: 3500.00, type: 'credit', status: 'completed', location: 'Bank Transfer' },
  { id: 5, date: '2025-11-08', merchant: 'Amazon', category: 'Shopping', amount: -127.45, type: 'debit', status: 'pending', location: 'Online' },
  { id: 6, date: '2025-11-07', merchant: 'Electric Company', category: 'Utilities', amount: -124.56, type: 'debit', status: 'completed', location: 'Direct Debit' },
  { id: 7, date: '2025-11-07', merchant: 'Italian Restaurant', category: 'Dining Out', amount: -67.80, type: 'debit', status: 'completed', location: 'Amsterdam' },
  { id: 8, date: '2025-11-06', merchant: 'Albert Heijn', category: 'Groceries', amount: -43.21, type: 'debit', status: 'completed', location: 'Utrecht' },
  { id: 9, date: '2025-11-06', merchant: 'Spotify', category: 'Entertainment', amount: -9.99, type: 'debit', status: 'completed', location: 'Online' },
  { id: 10, date: '2025-11-05', merchant: 'H&M Store', category: 'Shopping', amount: -85.60, type: 'debit', status: 'completed', location: 'The Hague' },
];
