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

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <DeveloperBoardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentTurnedInIcon />
      </ListItemIcon>
      <ListItemText primary="Projects" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AccountCircleIcon />
      </ListItemIcon>
      <ListItemText primary="User" />
    </ListItemButton>
    <ListItemButton>
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
    <ListItemButton>
      <ListItemIcon>
        <HelpCenterIcon />
      </ListItemIcon>
      <ListItemText primary="Help" />
    </ListItemButton>
  </React.Fragment>
);
