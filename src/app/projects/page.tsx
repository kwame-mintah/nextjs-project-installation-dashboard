'use client';

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
  Grid,
  Link,
  Paper,
  Skeleton,
  Typography,
} from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import useSWR from 'swr';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const url = `${process.env.NEXT_PUBLIC_BACKEND_SERVICE_URL}/` + `projects/`;
const fetcher = (url: RequestInfo | URL) =>
  fetch(url).then((response) => {
    if (response.status === 200) {
      return response.json();
    }
    throw new Error('Error returning projects');
  });

function GetProjects() {
  const { data, error } = useSWR(url, fetcher);

  if (error) return <Alert severity="error">Error loading projects.</Alert>;
  if (!data) return <Skeleton variant="text" sx={{ fontSize: '10rem' }} />;
  return (
    <div>
      {data.projects.map((data: any) => {
        return (
          <>
            <Accordion key={data.projectId}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>{data.projectName}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography gutterBottom={true}>
                  {data.projectDescription}
                </Typography>
                <Typography>
                  Download project resources{' '}
                  <Link href={'projects/' + `${data.projectId}`}>here</Link>.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <br />
          </>
        );
      })}
    </div>
  );
}

export default async function Page() {
  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <Typography variant="overline" gutterBottom>
                Current projects
              </Typography>
              <div>
                <GetProjects />
                <Typography variant="overline" gutterBottom={true}>
                  Previous projects
                </Typography>
                <Accordion disabled>
                  {/* Accordion #4 */}
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                  >
                    <Typography>Boomerang</Typography>
                  </AccordionSummary>
                  {/* Accordion #4 */}
                </Accordion>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
