'use client';
import { Grid, Paper, Typography } from '@mui/material';
import { Container } from '@mui/system';
import Link from 'next/link';

export default function Page() {
  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={12}>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <Typography variant="h6">
                How to install Homebrew of MacOS?
              </Typography>
              <Typography variant="subtitle1">
                Details for downloading Homebrew can be found{' '}
                <Link
                  target="_blank"
                  href="https://docs.brew.sh/Installation#macos-requirements"
                >
                  here
                </Link>
                .
              </Typography>
              <br />
              <Typography variant="h6">
                How to install Chocolatey for Windows?
              </Typography>
              <Typography variant="subtitle1">
                Details for downloading Chocolately can be found{' '}
                <Link
                  target="_blank"
                  href="https://chocolatey.org/install#install-step2"
                >
                  here
                </Link>
                .
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
