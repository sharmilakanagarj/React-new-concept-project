import { useMemo } from 'react';
import { useLanguage } from '../Translation/useLanguage';
import { insightsTransactionTranslations } from '../Translation/InsightsTransaction';
import { categoryData, insights, merchantData, trendData } from '../Data/Insightsdata';
import { Alert, AlertDescription } from '../components/lightswind/alert';
import { AlertCircle, TrendingDown, TrendingUp } from 'lucide-react';
import { Badge } from '../components/lightswind/badge';
import { Card, CardContent, CardHeader, CardTitle } from '../components/lightswind/card';
import { Cell, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

function Insights() {
  const { language } = useLanguage();
  const t = insightsTransactionTranslations[language];
  const totalSpending = useMemo(() => {
    return categoryData.reduce((sum, cat) => sum + cat.value, 0);
  }, []);

  return (
    <div className="space-y-6 px-4 sm:px-6 lg:px-8">
      <header className="space-y-1">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{t.title}</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Analyze your spending patterns and trends
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Total spending: €{totalSpending.toFixed(2)}
        </p>
      </header>

      <section className="space-y-3">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">{t.insights}</h3>
        {insights.map((insight, index) => (
          <Alert
            key={index}
            className={
              insight.type === 'increase'
                ? 'border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-950'
                : 'border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950'
            }
          >
            <AlertCircle
              className={`h-4 w-4 ${insight.type === 'increase'
                ? 'text-orange-600 dark:text-orange-400'
                : 'text-green-600 dark:text-green-400'
                }`}
            />
            <AlertDescription className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <span className="dark:text-gray-200 text-sm">{insight.message}</span>
              <Badge
                variant={insight.type === 'increase' ? 'destructive' : 'default'}
                className="flex items-center"
              >
                {insight.type === 'increase' ? (
                  <TrendingUp className="w-3 h-3 mr-1" />
                ) : (
                  <TrendingDown className="w-3 h-3 mr-1" />
                )}
                {insight.percentage}%
              </Badge>
            </AlertDescription>
          </Alert>
        ))}
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="dark:text-white">{t.spendingByCategory}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    data={categoryData as any}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) =>
                      `${name} ${percent ? (percent * 100).toFixed(0) : 0}%`
                    }
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>

                  <Tooltip formatter={(value: number) => `€${value.toFixed(2)}`} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 space-y-2">
              {categoryData.map((category, index) => (
                <div key={index} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: category.color }}
                    ></div>
                    <span className="text-gray-700 dark:text-gray-300">{category.name}</span>
                  </div>
                  <span className="text-gray-900 dark:text-white">
                    €{category.value.toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="dark:text-white">{t.topMerchants}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {merchantData.map((merchant, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-white dark:bg-gray-600 flex items-center justify-center shrink-0">
                    <merchant.logo className="w-6 h-6 text-gray-700 dark:text-gray-200" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                      {merchant.name}
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 text-xs text-gray-500 dark:text-gray-400">
                      <span>{merchant.category}</span>
                      <span className="hidden sm:inline">•</span>
                      <span>{merchant.transactions} transactions</span>
                    </div>
                  </div>

                  <p className="text-sm font-semibold text-gray-900 dark:text-white shrink-0">
                    €{merchant.amount.toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

      </div>

      <Card className="dark:bg-gray-800 dark:border-gray-700">
        <CardHeader>
          <CardTitle className="dark:text-white">{t.spendingTrends}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trendData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value: number) => `€${value}`} />
                <Legend />
                <Line type="monotone" dataKey="groceries" stroke="#3b82f6" name={t.groceries} />
                <Line type="monotone" dataKey="dining" stroke="#8b5cf6" name={t.dining} />
                <Line type="monotone" dataKey="utilities" stroke="#ec4899" name={t.utilities} />
                <Line type="monotone" dataKey="entertainment" stroke="#f59e0b" name={t.entertainment} />
                <Line type="monotone" dataKey="transport" stroke="#10b981" name={t.transport} />
                <Line type="monotone" dataKey="shopping" stroke="#06b6d4" name={t.shopping} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Insights;
