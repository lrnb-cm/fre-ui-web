import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import Avatar from '@mui/material/Avatar';
import avatar from '../../asset/img/avatar.png';
import menuIcon from '../../asset/img/menu.svg';
import { styled } from '@mui/material/styles';

export default function GlobalSearch() {
  return (
    <Paper
      component="form"
      sx={{
        p: '4px 6px',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        borderRadius: '16px',
      }}
    >
      <MenuICon src={menuIcon} alt="menu-icon" />
      <IconButton sx={{ p: '10px' }} aria-label="menu">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <EmojiObjectsIcon />
      </IconButton>
      <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
        <Avatar
          alt="Remy Sharp"
          src={avatar}
          sx={{ height: '32px', width: '32px' }}
        />
      </IconButton>
    </Paper>
  );
}

const MenuICon = styled('img')(({ theme }) => ({
  margin: theme.custom.pxToRem(0, 10),
  display: 'none',
  [theme.breakpoints.down('sm')]: {
    display: 'unset',
  },
}));
