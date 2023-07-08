'use client';

import { Button, Grid, Paper, TextField, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import DownloadingIcon from '@mui/icons-material/Downloading';

interface Props {
  params: { id: string };
}

let projectId = '';

const projectDetails = async ({ params }: Props) => {
  projectId = params.id;
  return fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_SERVICE_URL}` +
      `/projects/` +
      params.id +
      `/details`,
  )
    .then((response) => response.json())
    .then((jsonData) => {
      return jsonData;
    })
    .catch((err) => console.log(err));
};

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

export default async function Page({ params }: Props) {
  const responseObject = await projectDetails({ params });

  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <Typography variant="overline">Project details</Typography>
              <hr />
              <TextField
                id="outlined-disabled"
                label="Project ID"
                defaultValue={responseObject.projectId}
                InputProps={{
                  readOnly: true,
                }}
              />
              <hr />
              <TextField
                id="outlined-disabled"
                label="Project name"
                defaultValue={responseObject.projectName}
                InputProps={{
                  readOnly: true,
                }}
              />
              <hr />
              <Typography variant="overline">Software packages</Typography>
              <hr />
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
                    defaultValue={
                      responseObject.details.softwarePackages[0].name
                    }
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                  <TextField
                    id="outlined-disabled"
                    label="Version"
                    defaultValue={
                      responseObject.details.softwarePackages[0].version
                    }
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </div>
              </Box>
              <hr />
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
                    defaultValue={
                      responseObject.details.softwarePackages[1].name
                    }
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                  <TextField
                    id="outlined-disabled"
                    label="Version"
                    defaultValue={
                      responseObject.details.softwarePackages[1].version
                    }
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </div>
              </Box>
              <hr />
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
                    defaultValue={
                      responseObject.details.softwarePackages[2].name
                    }
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                  <TextField
                    id="outlined-disabled"
                    label="Version"
                    defaultValue={
                      responseObject.details.softwarePackages[2].version
                    }
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </div>
              </Box>
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
