import { accounts, recentTransactions } from '../Data/Accountoverviewdata';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { overviewTranslations } from '../Translation/Overviewtransaction';
import { useLanguage } from '../Translation/useLanguage';
import OrbitCard from '../components/lightswind/orbit-card';
import { Card, CardContent, CardHeader, CardTitle } from '../components/lightswind/card';


export function Overview() {
  const {language} = useLanguage();
  const t = overviewTranslations[language];
  const totalBalance = accounts.reduce((sum, acc) => sum + acc.balance, 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <header>
        <h2 className="text-gray-900 dark:text-white">{t.title}</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Welcome back! Here's your financial overview
        </p>
      </header>

      {/* Total Balance */}
      <OrbitCard className="bg-gradient-to-br from-[#0A2540] to-[#1a3a5a] text-white border-0">
        <div className="p-6">
          <p className="text-xl font-bold text-gray-900 dark:text-white mb-1">{t.totalBalance}</p>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
            €{totalBalance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
          </p>
          <div className="flex gap-4 flex-wrap text-green-300">
            <ArrowUpRight className="w-4 h-4" />
            <span>+€1,484.56 this month</span>
          </div>
        </div>
      </OrbitCard>

      {/* Accounts */}
      <section>
        <h3 className="text-gray-900 dark:text-white mb-4">{t.accounts}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {accounts.map(({ type, balance, change, icon: Icon, color }, i) => {
            const isNegative = balance < 0;
            const isChangePositive = change > 0;
            return (
              <Card
                key={i}
                className="hover:shadow-lg transition-shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <CardContent className="p-6">
                  <div className="flex justify-between mb-4">
                    <div className={`${color} p-3 rounded-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div
                      className={`flex items-center gap-1 ${
                        isChangePositive ? 'text-green-600' : 'text-red-600'
                      }`}
                    >
                      {isChangePositive ? (
                        <ArrowUpRight className="w-4 h-4" />
                      ) : (
                        <ArrowDownRight className="w-4 h-4" />
                      )}
                      <span>
                        €{Math.abs(change).toLocaleString('en-US', {
                          minimumFractionDigits: 2,
                        })}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    {t[type as keyof typeof t]}
                  </p>
                  <p
                    className={`${
                      isNegative
                        ? 'text-red-600'
                        : 'text-gray-900 dark:text-white'
                    }`}
                  >
                    {isNegative ? '-' : ''}€
                    {Math.abs(balance).toLocaleString('en-US', {
                      minimumFractionDigits: 2,
                    })}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Recent Activity */}
      <Card className="dark:bg-gray-800 dark:border-gray-700">
        <CardHeader>
          <CardTitle className="dark:text-white">{t.recentActivity}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentTransactions.map(
              ({ merchant, amount, date, category }, i) => (
                <div
                  key={i}
                  className="flex justify-between py-3 border-b last:border-b-0 dark:border-gray-700"
                >
                  <div>
                    <p className="text-gray-900 dark:text-white">{merchant}</p>
                    <p className="text-gray-500 dark:text-gray-400">
                      {date} · {category}
                    </p>
                  </div>
                  <p
                    className={`${
                      amount < 0 ? 'text-red-600' : 'text-green-600'
                    }`}
                  >
                    {amount < 0 ? '-' : '+'}€
                    {Math.abs(amount).toLocaleString('en-US', {
                      minimumFractionDigits: 2,
                    })}
                  </p>
                </div>
              )
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
