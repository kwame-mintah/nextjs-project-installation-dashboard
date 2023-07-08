'use client';

import { Grid, Paper, Typography, TextField } from '@mui/material';
import { Container } from '@mui/system';

const userSettings = async () => {
  return fetch(`${process.env.NEXT_PUBLIC_BACKEND_SERVICE_URL}` + `/settings/`)
    .then((response) => response.json())
    .then((jsonData) => {
      return jsonData;
    })
    .catch((err) => console.log(err));
};

export default async function Page() {
  const setting = await userSettings();

  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <Typography variant="overline">Settings</Typography>
              <hr />
              <TextField
                id="outlined-disabled"
                label="Operating system (OS)"
                defaultValue={setting.operatingSystem}
                InputProps={{
                  readOnly: true,
                }}
              />
              <hr />
              <TextField
                id="outlined-disabled"
                label="OS version"
                defaultValue={setting.version}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
