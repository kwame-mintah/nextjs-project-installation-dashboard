'use client';

import {
  Alert,
  Button,
  Grid,
  Paper,
  Skeleton,
  TextField,
  Typography,
} from '@mui/material';
import { Box, Container } from '@mui/system';
import DownloadingIcon from '@mui/icons-material/Downloading';
import useSWR from 'swr';

interface Props {
  params: { id: string };
}

let projectId = '';

const url = `${process.env.NEXT_PUBLIC_BACKEND_SERVICE_URL}/` + `projects/`;
const fetcher = (url: RequestInfo | URL) =>
  fetch(url).then((response) => {
    if (response.status === 200) {
      return response.json();
    }
    throw new Error('Error returning project details');
  });

const downloadRequest = async () => {
  return fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_SERVICE_URL}/` +
      `projects/` +
      projectId +
      '/' +
      'details/' +
      'macOS',
    { method: 'POST', body: JSON.stringify({}) },
  )
    .then((response) => response.blob())
    .then((data) => {
      const a = document.createElement(`a`);
      a.href = window.URL.createObjectURL(data);
      a.download = 'test.sh';
      a.click();
    })
    .catch((err) => console.log(err));
};

function GetSoftwarePackages({ params }: Props) {
  projectId = params.id;
  const { data, error } = useSWR(url + params.id + `/details`, fetcher);

  if (error)
    return <Alert severity="error">Error loading software packages</Alert>;
  if (!data) return <Skeleton variant="rectangular" width={500} height={60} />;
  return (
    <>
      <Typography variant="overline">Project details</Typography>
      <hr />
      <TextField
        id="outlined-disabled"
        label="Project ID"
        defaultValue={data.projectId}
        InputProps={{
          readOnly: true,
        }}
      />
      <hr />
      <TextField
        id="outlined-disabled"
        label="Project name"
        defaultValue={data.projectName}
        InputProps={{
          readOnly: true,
        }}
      />
      <hr />
      <Typography variant="overline">Software packages</Typography>
      <div>
        {data.details.softwarePackages.map((data: any) => {
          return (
            <>
              <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': { m: 1, width: '49ch' },
                }}
                noValidate
                autoComplete="off"
              >
                <div>
                  <TextField
                    id="outlined-disabled"
                    label="Package name"
                    defaultValue={data.name}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                  <TextField
                    id="outlined-disabled"
                    label="Version"
                    defaultValue={data.version}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </div>
              </Box>
            </>
          );
        })}
      </div>
    </>
  );
}

export default async function Page({ params }: Props) {
  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <GetSoftwarePackages params={params} />
              <hr />
              <Button
                variant="outlined"
                startIcon={<DownloadingIcon />}
                onClick={downloadRequest}
              >
                Download automation script
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
