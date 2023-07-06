'use client';

import { Grid, Paper } from '@mui/material';
import { Container } from '@mui/system';

export default function Dashboard() {
  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              WAIT
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
