// material-ui
import { Grid } from '@mui/material';
import { useGetYoutubeMessage } from 'api/youtube-message';
import React, { useEffect } from 'react';

import WelcomeBanner from 'sections/dashboard/analytics/WelcomeBanner';
import YoutubeMessages from 'sections/widget/data/YoutubeMessages';

// ==============================|| DASHBOARD - ANALYTICS ||============================== //

const DashboardAnalytics = () => {
  const { messages, messagesLoading } = useGetYoutubeMessage();

  useEffect(() => {
    console.log('Hello messsages: ', messages);
  }, [messagesLoading]);

  return (
    <Grid container rowSpacing={4.5} columnSpacing={3}>
      <Grid item xs={12}>
        <WelcomeBanner />
      </Grid>

      {React.Children.toArray(
        messages?.map((item, index) => (
          <Grid key={index} item xs={12}>
            <YoutubeMessages
              link={item.link}
              description={item.description}
              like_number={item.like_number}
              dislike_number={item.dislike_number}
              user_id={item.user_id}
            />
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default DashboardAnalytics;
