export type Language = 'EN' | 'NL' ; 

export interface GoalTransaction {
        title: string;
      subtitle: string;
      addGoal: string;
      saved: string;
      of: string;
      remaining: string;
      targetDate: string;
      monthlyContribution: string;
      onTrack: string;
      behindSchedule: string;
      completed: string;
      addFunds: string;
      edit: string;
      totalSaved: string;
      totalGoals: string;
      completionRate: string;
}

export const goalTransactionTranslations: Record<Language, GoalTransaction> = {
       EN: {
      title: 'Savings Goals',
      subtitle: 'Track your progress towards financial goals',
      addGoal: 'Add New Goal',
      saved: 'saved',
      of: 'of',
      remaining: 'remaining',
      targetDate: 'Target',
      monthlyContribution: 'Monthly',
      onTrack: 'On Track',
      behindSchedule: 'Behind Schedule',
      completed: 'Completed',
      addFunds: 'Add Funds',
      edit: 'Edit',
      totalSaved: 'Total Saved',
      totalGoals: 'Total Goals',
      completionRate: 'Completion Rate',
    },
    NL: {
      title: 'Spaardoelen',
      subtitle: 'Volg uw voortgang naar financiële doelen',
      addGoal: 'Nieuw Doel Toevoegen',
      saved: 'gespaard',
      of: 'van',
      remaining: 'resterend',
      targetDate: 'Doel',
      monthlyContribution: 'Maandelijks',
      onTrack: 'Op Schema',
      behindSchedule: 'Achter Schema',
      completed: 'Voltooid',
      addFunds: 'Fondsen Toevoegen',
      edit: 'Bewerken',
      totalSaved: 'Totaal Gespaard',
      totalGoals: 'Totaal Doelen',
      completionRate: 'Voltooiingspercentage',
    }
}