// material-ui
import { Stack, Typography } from '@mui/material';

// project imports
import MainCard from 'components/MainCard';

// ===========================|| DATA WIDGET - TRAFFIC SOURCES ||=========================== //

const YoutubeMessages = () => (
  <MainCard>
    <Stack spacing={2}>
      <Typography variant="h5">Movie Title</Typography>
      <Typography> Shared by: hieu123@gmail.com</Typography>
      <Typography> 50 likes, 60 dislikes</Typography>
      <Typography>Description:</Typography>
      <Typography variant="caption" color="secondary">
        You’re getting more and more sources, keep it up!
      </Typography>
    </Stack>
  </MainCard>
);

export default YoutubeMessages;
