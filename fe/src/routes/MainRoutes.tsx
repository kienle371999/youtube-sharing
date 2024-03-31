import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import DashboardLayout from 'layout/Dashboard';
import ShareVideos from 'pages/dashboard/share-videos';

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
        },
        {
          path: 'videos',
          element: <ShareVideos />
        }
      ]
    }
  ]
};

export default MainRoutes;
