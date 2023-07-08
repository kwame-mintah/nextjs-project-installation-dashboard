'use client';
import { Typography } from '@mui/material';
import Link from 'next/link';

export function Copyright(props: any) {
  return (
    <>
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        {...props}
      >
        {'Copyright © '}
        Kwame Mintah | Automation Dashboard {new Date().getFullYear()}
        {'.'}
      </Typography>
    </>
  );
}
