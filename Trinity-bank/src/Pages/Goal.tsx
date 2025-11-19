import { useLanguage } from '../Translation/useLanguage';
import { goalTransactionTranslations } from '../Translation/GoalTransaction';
import { goalData } from '../Data/Goaldata';
import { Button } from '../components/lightswind/button';
import { DollarSign, Plus, Target, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '../components/lightswind/card';
import { Badge } from '../components/lightswind/badge';
import { Progress } from '../components/lightswind/progress';
import { useCallback, useMemo } from 'react';

function Goal() {
  const { language } = useLanguage();
  const t = goalTransactionTranslations[language];

  const totalSaved = useMemo(() => {
    return goalData.reduce((sum, goal) => sum + goal.current, 0);
  }, []);

  const completedGoals = useMemo(() => {
    return goalData.filter(g => g.status === 'completed').length;
  }, []);

  const completionRate = (completedGoals / goalData.length) * 100;

  const getStatusBadge = useCallback((status: string) => {
    switch (status) {
      case 'completed':
        return { variant: 'default' as const, label: t.completed };
      case 'behindSchedule':
        return { variant: 'destructive' as const, label: t.behindSchedule };
      default:
        return { variant: 'secondary' as const, label: t.onTrack };
    }
  }, [t]);

  const formatDate = useCallback((dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === 'EN' ? 'en-US' : 'nl-NL', {
      month: 'short',
      year: 'numeric',
    });
  }, [language]);



  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-gray-900 dark:text-white">{t.title}</h2>
          <p className="text-gray-600 dark:text-gray-400">{t.subtitle}</p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          {t.addGoal}
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                <DollarSign className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="text-gray-600 dark:text-gray-400">{t.totalSaved}</p>
                <p className="text-gray-900 dark:text-white">
                  €{totalSaved.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
                <Target className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <p className="text-gray-600 dark:text-gray-400">{t.totalGoals}</p>
                <p className="text-gray-900 dark:text-white">
                  {goalData.length} {language === 'EN' ? 'goals' : 'doelen'}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
                <TrendingUp className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <p className="text-gray-600 dark:text-gray-400">{t.completionRate}</p>
                <p className="text-gray-900 dark:text-white">{completionRate.toFixed(0)}%</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {goalData.map((goal, index) => {
          const percentage = (goal.current / goal.target) * 100;
          const remaining = goal.target - goal.current;
          const statusBadge = getStatusBadge(goal.status);

          const Icon = goal.icon;

          return (
            <Card key={index} className="hover:shadow-lg transition-shadow dark:bg-gray-800 dark:border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`${goal.color} w-14 h-14 rounded-full flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-900 dark:text-white">{goal.name}</p>
                      <div className="flex items-center gap-2 mt-1">
                        {/* <Calendar className="w-3 h-3 text-gray-400 dark:text-gray-500" /> */}
                        <p className="text-gray-500 dark:text-gray-400">{formatDate(goal.targetDate)}</p>
                      </div>
                    </div>
                  </div>
                  <Badge variant={statusBadge.variant}>{statusBadge.label}</Badge>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-gray-600 dark:text-gray-400">
                        €{goal.current.toLocaleString('en-US')} {t.of} €{goal.target.toLocaleString('en-US')}
                      </p>
                      <p className="text-gray-900 dark:text-white">{percentage.toFixed(0)}%</p>
                    </div>
                    <Progress value={Math.min(percentage, 100)} className="h-2" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-500 dark:text-gray-400">{t.remaining}</p>
                      <p className="text-gray-900 dark:text-white">€{remaining.toLocaleString('en-US')}</p>
                    </div>
                    {goal.monthlyContribution > 0 && (
                      <div>
                        <p className="text-gray-500 dark:text-gray-400">{t.monthlyContribution}</p>
                        <p className="text-gray-900 dark:text-white">€{goal.monthlyContribution.toLocaleString('en-US')}</p>
                      </div>
                    )}
                  </div>

                  {goal.status !== 'completed' && (
                    <Button variant="outline" className="w-full gap-2">
                      <Plus className="w-4 h-4" />
                      {t.addFunds}
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default Goal;
