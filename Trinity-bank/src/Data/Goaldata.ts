import { CarFront, Gem, GraduationCap, House, Plane, Shield } from "lucide-react";
import type { Goal } from "../Interfaces/Interface";
export type Language = 'EN' | 'NL' ; 
const language: Language = 'EN';

export const goalData : Goal[] =[
     {
      name: language === 'EN' ? 'Vacation Fund' : 'Vakantiebudget',
      target: 5000,
      current: 3250,
      monthlyContribution: 500,
      targetDate: '2026-06-01',
      icon: Plane,
      color: 'bg-blue-500',
      status: 'onTrack'
    },
    {
      name: language === 'EN' ? 'Emergency Fund' : 'Noodfonds',
      target: 10000,
      current: 7500,
      monthlyContribution: 750,
      targetDate: '2026-03-01',
      icon: Shield,
      color: 'bg-green-500',
      status: 'onTrack'
    },
    {
      name: language === 'EN' ? 'New Car' : 'Nieuwe Auto',
      target: 25000,
      current: 8900,
      monthlyContribution: 1000,
      targetDate: '2027-01-01',
      icon: CarFront,
      color: 'bg-purple-500',
      status: 'behindSchedule'
    },
        {
      name: language === 'EN' ? 'Home Renovation' : 'Huisrenovatie',
      target: 15000,
      current: 4200,
      monthlyContribution: 600,
      targetDate: '2026-12-01',
      icon: House,
      color: 'bg-orange-500',
      status: 'onTrack'
    },
    {
      name: language === 'EN' ? 'Wedding Fund' : 'Bruiloftsbudget',
      target: 20000,
      current: 20000,
      monthlyContribution: 0,
      targetDate: '2025-09-01',
      icon: Gem,
      color: 'bg-pink-500',
      status: 'completed'
    },
    {
      name: language === 'EN' ? 'Education Fund' : 'Onderwijsfonds',
      target: 30000,
      current: 12500,
      monthlyContribution: 850,
      targetDate: '2028-01-01',
      icon: GraduationCap,
      color: 'bg-teal-500',
      status: 'onTrack'
    },
]