import { Fragment } from 'react';

import Profile from './Profile';
import Notification from './Notification';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router';

// ==============================|| HEADER - CONTENT ||============================== //

const HeaderContent = () => {
  const navigate = useNavigate();

  return (
    <Fragment>
      <Button variant="contained" size="small" onClick={() => navigate('/videos')}>
        Share video
      </Button>
      <Notification />
      <Profile />
    </Fragment>
  );
};

export default HeaderContent;
