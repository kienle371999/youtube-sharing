import { Button, Grid, Stack, TextField } from '@mui/material';
import axios from 'axios';
import { Formik } from 'formik';
import { useNavigate } from 'react-router';
import WelcomeBanner from 'sections/dashboard/analytics/WelcomeBanner';

const ShareVideos = () => {
  const navigate = useNavigate();

  return (
    <Grid container rowSpacing={4.5} columnSpacing={3}>
      <Grid item xs={12}>
        <WelcomeBanner />
      </Grid>

      <Grid item xs={12}>
        <Formik
          initialValues={{
            link: ''
          }}
          onSubmit={async (values, _) => {
            try {
              const axiosCopy = axios.create({ baseURL: 'http://localhost:3000/' });
              await axiosCopy.post('/api/videos', { link: values.link });
              navigate('/dashboard/analytics');
            } catch (error) {
              console.error('Error: ', error);
            }
          }}
        >
          {(props) => (
            <form noValidate onSubmit={props.handleSubmit}>
              <Stack spacing={1}>
                <TextField
                  type="link"
                  fullWidth
                  value={props.values.link}
                  name="link"
                  onChange={props.handleChange}
                  id="link"
                  placeholder="Youtube link"
                />
                <Button variant="contained" type="submit" sx={{ width: 75 }}>
                  Submit
                </Button>
              </Stack>
            </form>
          )}
        </Formik>
      </Grid>
    </Grid>
  );
};

export default ShareVideos;
