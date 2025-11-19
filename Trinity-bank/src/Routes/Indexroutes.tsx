import { Goal, Settings } from 'lucide-react';
import React from 'react';
import { useRoutes } from 'react-router-dom';
import SidebarLayout from '../components/SidebarLayout';
import Budgets from '../Pages/Budgets';
import Insights from '../Pages/Insights';
import { Overview } from '../Pages/Overview';
import Tranasaction from '../Pages/Tranasaction';



const Indexroutes: React.FC = () => {
  const routes = useRoutes([
    {
      path: '/', 
      element: <SidebarLayout />,
      children: [
        {
          path: 'overview',
          element: <Overview/>,
        },
        {
          path: 'transactions',
          element: <Tranasaction />,
        },
        {
          path: 'insights',
          element: <Insights />,
        },
        {
          path: 'budgets',
          element: < Budgets/>,
        },
        {
          path: 'goals',
          element: <Goal />,
        },
         {
          path: 'settings',
          element: <Settings />,
        },
      ],
    },
  ]);

  return routes;
};

export default Indexroutes;
