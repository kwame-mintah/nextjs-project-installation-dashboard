'use client';

import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { Copyright } from './components/copyright';
import { createTheme } from '@mui/material/styles';
import NavBar from './components/appbar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';

const defaultTheme = createTheme();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <head>
          <link rel="shortcut icon" href="./favicon.ico" />
          <title>Automation Dashboard</title>
        </head>
        <body>
          <ThemeProvider theme={defaultTheme}>
            {/* Theme start */}
            <Box sx={{ display: 'flex' }}>
              {/* Box 1 start */}
              <CssBaseline enableColorScheme={true} />
              {/* Navbar */}
              <NavBar />
              {/* Box 2 start */}
              <Box
                component="main"
                sx={{
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                      ? theme.palette.grey[100]
                      : theme.palette.grey[900],
                  flexGrow: 1,
                  height: '100vh',
                  overflow: 'auto',
                }}
              >
                <Toolbar />
                <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                  <main>{children}</main>
                  <Copyright />
                </Container>
                {/* Box 2 end */}
              </Box>
              {/* Box 1 end */}
            </Box>
            {/* Theme end */}
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
