import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { menuItemType } from './types';
import { useLocation } from 'react-router-dom';

export default function MenuItems({ text, icon, open, onClick }: menuItemType) {
  let { pathname } = useLocation();

  const navPath =
    pathname.split('/')[2] === undefined ? 'dashboard' : pathname.split('/')[2];

  const Icon = icon;
  const active = navPath === text.toString().replace(/\ /g, '').toLowerCase();
  return (
    <ListItem
      button
      key={text}
      sx={{
        minHeight: 48,
        justifyContent: open ? 'initial' : 'center',
        px: 2.5,
      }}
      onClick={onClick}
    >
      <ListItemIcon
        sx={{
          minWidth: 0,
          mr: open ? 3 : 'auto',
          justifyContent: 'center',
        }}
      >
        <Icon fill={active ? '#3758CC' : '#3C3C3C'} />
      </ListItemIcon>
      <ListItemText
        primary={text}
        sx={{ opacity: open ? 1 : 0, color: active ? '#3758CC' : '#3C3C3C' }}
      />
    </ListItem>
  );
}
