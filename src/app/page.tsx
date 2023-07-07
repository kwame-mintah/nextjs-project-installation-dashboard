'use client';

import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Paper,
  Typography,
} from '@mui/material';
import { Container } from '@mui/system';

const getDashboard = async () => {
  return fetch(`${process.env.NEXT_PUBLIC_BACKEND_SERVICE_URL}/` + `dashboard/`)
    .then((response) => response.json())
    .then((jsonData) => {
      return jsonData;
    })
    .catch((err) => console.log(err));
};

export default async function Dashboard() {
  const dashboard = await getDashboard();

  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          {/* Card 1 */}
          <Grid item xs={4}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <Card sx={{ minWidth: 10, minHeight: 150, maxHeight: 150 }}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Assign projects
                  </Typography>
                  <Typography variant="h4">
                    {dashboard.assignedProjects}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button href="/projects" size="small">
                    Projects
                  </Button>
                </CardActions>
              </Card>
            </Paper>
          </Grid>
          {/* Card 2 */}
          <Grid item xs={4}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <Card sx={{ minWidth: 10, minHeight: 150, maxHeight: 150 }}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Security Hotspot
                  </Typography>
                  <Typography variant="caption" display="block" gutterBottom>
                    Critical: {dashboard.securityHotspots.critical}
                  </Typography>
                  <Typography variant="caption" display="block" gutterBottom>
                    High: {dashboard.securityHotspots.high}
                  </Typography>
                  <Typography variant="caption" display="block" gutterBottom>
                    Medium: {dashboard.securityHotspots.medium}
                  </Typography>
                  <Typography variant="caption" display="block" gutterBottom>
                    Low: {dashboard.securityHotspots.low}
                  </Typography>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
          {/* Card 3 */}
          <Grid item xs={4}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <Card sx={{ minWidth: 10, minHeight: 150, maxHeight: 150 }}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Updates
                  </Typography>
                  <Typography variant="caption" display="block" gutterBottom>
                    {dashboard.updates.changes}
                  </Typography>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
