'use client';

import { Grid, Paper, TextField, Typography } from '@mui/material';
import { Container } from '@mui/system';

const userDetails = async () => {
  return fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_SERVICE_URL}` + `/user/0x00/details`,
  )
    .then((response) => response.json())
    .then((jsonData) => {
      return jsonData;
    })
    .catch((err) => console.log(err));
};

export default async function Page() {
  const user = await userDetails();

  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <Typography variant="overline">User details</Typography>
              <hr />
              <TextField
                id="outlined-disabled"
                label="First name"
                defaultValue={user.firstName}
                InputProps={{
                  readOnly: true,
                }}
              />
              <hr />
              <TextField
                id="outlined-disabled"
                label="Last name"
                defaultValue={user.lastName}
                InputProps={{
                  readOnly: true,
                }}
              />
              <hr />
              <TextField
                id="outlined-disabled"
                label="Role"
                defaultValue={user.role}
                InputProps={{
                  readOnly: true,
                }}
              />
              <hr />
              <TextField
                id="outlined-disabled"
                label="Location"
                defaultValue={user.location}
                InputProps={{
                  readOnly: true,
                }}
              />
              <hr />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
