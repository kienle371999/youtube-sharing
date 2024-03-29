// material-ui
import { Grid } from '@mui/material';

import WelcomeBanner from 'sections/dashboard/analytics/WelcomeBanner';
import YoutubeMessages from 'sections/widget/data/YoutubeMessages';
// ==============================|| DASHBOARD - ANALYTICS ||============================== //

const DashboardAnalytics = () => {
  return (
    <Grid container rowSpacing={4.5} columnSpacing={3}>
      <Grid item xs={12}>
        <WelcomeBanner />
      </Grid>

      <Grid item xs={12}>
        <YoutubeMessages />
      </Grid>
      <Grid item xs={12}>
        <YoutubeMessages />
      </Grid>
    </Grid>
  );
};

export default DashboardAnalytics;
