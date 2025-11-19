import { useMemo, useState } from 'react';
import {
  Search,
  Filter,
  Download,
  Calendar,
} from 'lucide-react';

import { transactions } from '../Data/Transactiondata';
import { useLanguage } from '../Translation/useLanguage';
import { TranasactionTransaction } from '../Translation/TranasactionTransaction';

import { Button } from '../components/lightswind/button';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '../components/lightswind/select';
import { Card, CardContent, CardHeader, CardTitle } from '../components/lightswind/card';
import { Input } from '../components/lightswind/input';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '../components/lightswind/table';
import { Badge } from '../components/lightswind/badge';

export function Tranasaction() {
  const { language } = useLanguage();
  const t = TranasactionTransaction[language];

  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

const filteredTransactions = useMemo(() => {
    return transactions.filter(transaction => {
      const matchesSearch =
        transaction.merchant.toLowerCase().includes(searchQuery.toLowerCase()) ||
        transaction.location.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        categoryFilter === 'all' || transaction.category === categoryFilter;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, categoryFilter]);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-gray-900 dark:text-white">{t.title}</h2>
        <p className="text-gray-600 dark:text-gray-400">
          View and manage your transaction history
        </p>
      </div>
      <Card className="dark:bg-gray-800 dark:border-gray-700">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder={t.search}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger>
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4" />
                  <SelectValue placeholder={`${t.all} ${t.category}`} />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t.all} {t.category}</SelectItem>
                <SelectItem value="Groceries">{t.groceries}</SelectItem>
                <SelectItem value="Dining Out">{t.dining}</SelectItem>
                <SelectItem value="Utilities">{t.utilities}</SelectItem>
                <SelectItem value="Entertainment">{t.entertainment}</SelectItem>
                <SelectItem value="Transport">{t.transport}</SelectItem>
                <SelectItem value="Shopping">{t.shopping}</SelectItem>
                <SelectItem value="Income">{t.income}</SelectItem>
              </SelectContent>
            </Select>

            {/* Export Button */}
            <Button variant="outline" className="gap-2">
              <Download className="w-4 h-4" />
              {t.export}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Transactions Table */}
      <Card className="dark:bg-gray-800 dark:border-gray-700">
        <CardHeader>
          <CardTitle className="dark:text-white">Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="dark:border-gray-700">
                  <TableHead className="dark:text-gray-300">{t.date}</TableHead>
                  <TableHead className="dark:text-gray-300">{t.merchant}</TableHead>
                  <TableHead className="dark:text-gray-300">{t.category}</TableHead>
                  <TableHead className="text-right dark:text-gray-300">{t.amount}</TableHead>
                  <TableHead className="dark:text-gray-300">{t.status}</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {filteredTransactions.map((transaction) => (
                  <TableRow key={transaction.id} className="dark:border-gray-700">
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                        <span className="dark:text-gray-300">{transaction.date}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <p className="text-gray-900 dark:text-white">{transaction.merchant}</p>
                        <p className="text-gray-500 dark:text-gray-400">{transaction.location}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="dark:border-gray-600 dark:text-gray-300">
                        {transaction.category}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <span className={transaction.amount < 0 ? 'text-red-600' : 'text-green-600'}>
                        {transaction.amount < 0 ? '-' : '+'}€
                        {Math.abs(transaction.amount).toLocaleString('en-US', {
                          minimumFractionDigits: 2,
                        })}
                      </span>
                    </TableCell>
                    <TableCell>
                    <Badge variant={transaction.status === 'completed' ? 'default' : 'secondary'}>
                        {transaction.status === 'completed' ? t.completed : t.pending}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Tranasaction;
