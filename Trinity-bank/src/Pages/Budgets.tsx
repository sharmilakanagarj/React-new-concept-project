import { budgetData } from '../Data/Budgetdata';
import { Button } from '../components/lightswind/button';
import { AlertTriangle, Plus } from 'lucide-react';
import { useLanguage } from '../Translation/useLanguage';
import { budgetTransactionTranslations } from '../Translation/BudgetTransaction';
import { Card, CardContent } from '../components/lightswind/card';
import { Alert, AlertDescription } from '../components/lightswind/alert';
import { Badge } from '../components/lightswind/badge';
import { Progress } from '../components/lightswind/progress';
import { useCallback, useMemo } from 'react';

function Budgets() {

  const { language } = useLanguage();
  const t = budgetTransactionTranslations[language];

  const totalBudget = useMemo(() => {
    return budgetData.reduce((sum, b) => sum + b.budget, 0);
  }, [])

  const totalSpent = useMemo(() => {
    return budgetData.reduce((sum, b) => sum + b.spent, 0);
  }, [])

  const getBudgetStatus = useCallback((spent: number, budget: number) => {
    const percentage = (spent / budget) * 100;
    if (percentage >= 100) return 'exceeded';
    if (percentage >= 80) return 'warning';
    return 'onTrack';
  }, []);

  const getStatusColor = useCallback((status: string) => {
    switch (status) {
      case 'exceeded': return 'text-red-600';
      case 'warning': return 'text-orange-600';
      default: return 'text-green-600';
    }
  }, []);

  const getStatusBadge = useCallback((status: string) => {
    switch (status) {
      case 'exceeded': return { variant: 'destructive' as const, label: t.overBudget };
      case 'warning': return { variant: 'secondary' as const, label: t.nearLimit };
      default: return { variant: 'default' as const, label: t.onTrack };
    }
  }, [t]);

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-gray-900 dark:text-white">{t.title}</h2>
          <p className="text-gray-600 dark:text-gray-400">{t.subtitle}</p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          {t.addBudget}
        </Button>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardContent className="p-6">
            <p className="text-gray-600 dark:text-gray-400 mb-2">{t.totalBudget}</p>
            <p className="text-gray-900 dark:text-white">€{totalBudget.toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
          </CardContent>
        </Card>
        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardContent className="p-6">
            <p className="text-gray-600 dark:text-gray-400 mb-2">{t.totalSpent}</p>
            <p className="text-gray-900 dark:text-white">€{totalSpent.toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
          </CardContent>
        </Card>
        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardContent className="p-6">
            <p className="text-gray-600 dark:text-gray-400 mb-2">{t.remaining}</p>
            <p className={totalSpent > totalBudget ? 'text-red-600' : 'text-green-600'}>
              €{Math.abs(totalBudget - totalSpent).toLocaleString('en-US', { minimumFractionDigits: 2 })}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Alerts */}
      <div className="space-y-3">
        {budgetData.filter(b => getBudgetStatus(b.spent, b.budget) === 'exceeded').map((budget, index) => (
          <Alert key={`exceeded-${index}`} className="border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950">
            <AlertTriangle className="h-4 w-4 text-red-600 dark:text-red-400" />
            <AlertDescription className="dark:text-gray-200">
              <strong>{budget.category}</strong> {language === 'EN' ? 'budget exceeded by' : 'budget overschreden met'} €{(budget.spent - budget.budget).toFixed(2)}
            </AlertDescription>
          </Alert>
        ))}
        {budgetData.filter(b => getBudgetStatus(b.spent, b.budget) === 'warning').map((budget, index) => (
          <Alert key={`warning-${index}`} className="border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-950">
            <AlertTriangle className="h-4 w-4 text-orange-600 dark:text-orange-400" />
            <AlertDescription className="dark:text-gray-200">
              <strong>{budget.category}</strong> {language === 'EN' ? 'is at' : 'is op'} {((budget.spent / budget.budget) * 100).toFixed(0)}% {language === 'EN' ? 'of budget' : 'van budget'}
            </AlertDescription>
          </Alert>
        ))}
      </div>

      {/* Budget Cards */}
      <div>
        <h3 className="text-gray-900 dark:text-white mb-4">{t.monthlyBudgets}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {budgetData.map((budget, index) => {
            const percentage = (budget.spent / budget.budget) * 100;
            const status = getBudgetStatus(budget.spent, budget.budget);
            const statusBadge = getStatusBadge(status);
            const remaining = budget.budget - budget.spent;

            return (
              <Card key={index} className="hover:shadow-lg transition-shadow dark:bg-gray-800 dark:border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`${budget.color} w-12 h-12 rounded-lg flex items-center justify-center text-white`}>
                        {budget.category.charAt(0)}
                      </div>
                      <div>
                        <p className="text-gray-900 dark:text-white">{budget.category}</p>
                        <p className="text-gray-500 dark:text-gray-400">€{budget.spent.toFixed(2)} {t.of} €{budget.budget.toFixed(2)}</p>
                      </div>
                    </div>
                    <Badge variant={statusBadge.variant}>{statusBadge.label}</Badge>
                  </div>

                  <Progress value={Math.min(percentage, 100)} className="h-2 mb-3" />

                  <div className="flex items-center justify-between">
                    <p className={getStatusColor(status)}>
                      {remaining >= 0
                        ? `€${remaining.toFixed(2)} ${t.remaining}`
                        : `€${Math.abs(remaining).toFixed(2)} ${t.exceeded}`
                      }
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">{percentage.toFixed(0)}%</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Budgets