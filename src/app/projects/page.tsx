'use client';

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Link,
  Paper,
  Typography,
} from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const getProjects = async () => {
  return fetch(`${process.env.NEXT_PUBLIC_BACKEND_SERVICE_URL}/` + `projects/`)
    .then((response) => response.json())
    .then((jsonData) => {
      return jsonData.projects;
    })
    .catch((err) => console.log(err));
};

export default async function Page() {
  const projects = await getProjects();
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
                <Accordion>
                  {/* Accordion #1 */}
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>{projects[0].projectName}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography gutterBottom={true}>
                      {projects[0].projectDetails}
                    </Typography>
                    <Typography>
                      Download project resources{' '}
                      <Link href={'projects/' + `${projects[0].projectId}`}>
                        here
                      </Link>
                      .
                    </Typography>
                  </AccordionDetails>
                  {/* Accordion #1 */}
                </Accordion>
                <Accordion>
                  {/* Accordion #2 */}
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>{projects[1].projectName}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography gutterBottom={true}>
                      {projects[1].projectDetails}
                    </Typography>
                    <Typography>
                      Download project resources{' '}
                      <Link href={'projects/' + `${projects[1].projectId}`}>
                        here
                      </Link>
                      .
                    </Typography>
                  </AccordionDetails>
                  {/* Accordion #3 */}
                </Accordion>
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
