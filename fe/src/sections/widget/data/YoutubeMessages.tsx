// material-ui
import { Button, Stack, Typography } from '@mui/material';

// project imports
import MainCard from 'components/MainCard';

// ===========================|| DATA WIDGET - TRAFFIC SOURCES ||=========================== //

interface YoutubeMessageProps {
  link: string;
  description: string;
  like_number: string;
  dislike_number: string;
  user_id: string;
}

const YoutubeMessages = ({ link, description, like_number, dislike_number, user_id }: YoutubeMessageProps) => (
  <MainCard>
    <Stack spacing={2}>
      <Typography variant="h5">Movie Title</Typography>
      <Typography>{`Shared by: ${user_id}`}</Typography>
      <Typography>{`${like_number} likes`}</Typography>
      <Typography>{'Description:'}</Typography>
      <Typography variant="caption" color="secondary">
        {description}
      </Typography>
      <Button variant="contained" size="small" href={link} sx={{ width: 64 }}>
        Link
      </Button>
    </Stack>
  </MainCard>
);

export default YoutubeMessages;
