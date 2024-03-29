import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import DashboardLayout from 'layout/Dashboard';

// render - dashboard
const DashboardAnalytics = Loadable(lazy(() => import('pages/dashboard/analytics')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  children: [
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        {
          path: 'dashboard',
          children: [
            {
              path: 'analytics',
              element: <DashboardAnalytics />
            }
          ]
        }
      ]
    }
  ]
};

export default MainRoutes;
