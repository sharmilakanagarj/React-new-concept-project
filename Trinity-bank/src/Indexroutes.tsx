import React from 'react';
import { useRoutes } from 'react-router-dom';
import SidebarLayout from './components/SidebarLayout';
import Tranasaction from './Pages/Tranasaction';
import Insights from './Pages/Insights';
import Budgets from './Pages/Budgets';
import Goal from './Pages/Goal';
import  Settings  from './Pages/Settings';
import { Overview } from './Pages/Overview';


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
