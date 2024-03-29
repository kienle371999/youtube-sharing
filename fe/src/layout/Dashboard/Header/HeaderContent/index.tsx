import { Fragment } from 'react';

import Profile from './Profile';
import Notification from './Notification';
import { Button } from '@mui/material';

// ==============================|| HEADER - CONTENT ||============================== //

const HeaderContent = () => {
  return (
    <Fragment>
      <Button variant="contained" size="small">
        Share video
      </Button>
      <Notification />
      <Profile />
    </Fragment>
  );
};

export default HeaderContent;
