import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';

const apiUrl = process.env.NEXT_PUBLIC_BACKEND_SERVICE_URL + '/docs';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton component="a" href="/">
      <ListItemIcon>
        <DeveloperBoardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton component="a" href="/projects">
      <ListItemIcon>
        <AssignmentTurnedInIcon />
      </ListItemIcon>
      <ListItemText primary="Projects" />
    </ListItemButton>
    <ListItemButton component="a" href="/user">
      <ListItemIcon>
        <AccountCircleIcon />
      </ListItemIcon>
      <ListItemText primary="User" />
    </ListItemButton>
    <ListItemButton component="a" href="/settings">
      <ListItemIcon>
        <SettingsIcon />
      </ListItemIcon>
      <ListItemText primary="Settings" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Additional links
    </ListSubheader>
    <ListItemButton component="a" href="/help">
      <ListItemIcon>
        <HelpCenterIcon />
      </ListItemIcon>
      <ListItemText primary="Help" />
    </ListItemButton>
    <ListItemButton component="a" href={apiUrl} target="_blank">
      <ListItemIcon>
        <IntegrationInstructionsIcon />
      </ListItemIcon>
      <ListItemText primary="API Docs" />
    </ListItemButton>
  </React.Fragment>
);
