import * as React from 'react';
import Typography from '@mui/material/Typography';

export default function Title(props: any) {
  return (
    <>
      <Typography
        component="h1"
        variant="h6"
        color="inherit"
        noWrap
        sx={{ flexGrow: 1 }}
      >
        ⚙️ Automation Dashboard
      </Typography>
    </>
  );
}
