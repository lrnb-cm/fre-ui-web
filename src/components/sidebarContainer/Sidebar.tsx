import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemButton from '@mui/material/ListItemButton';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PeopleIcon from '@mui/icons-material/People';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import { useNavigate } from 'react-router-dom';
import logo from '../../asset/img/logo.png';
import Avatar from '@mui/material/Avatar';
import DashIcon from '../../asset/icons/dashboardIcon';
import ReportIcon from '../../asset/icons/reportIcon';
import MyShopIcon from '../../asset/icons/myshop';
import ReportedProductIcon from '../../asset/icons/reportedproduct';
import CustomerIcon from '../../asset/icons/customers';
const openedMixin = (theme: Theme): CSSObject => ({
  width: theme.custom.sidebar.open,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  display: 'flex  !important',
  justifyContent: 'space-between  !important',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: theme.custom.sidebar.close,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
  display: 'flex  !important',
  justifyContent: 'space-between  !important',
});

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== 'open',
// })<AppBarProps>(({ theme, open }) => ({
//   zIndex: theme.zIndex.drawer + 1,
//   transition: theme.transitions.create(['width', 'margin'], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(['width', 'margin'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: theme.custom.sidebar.open,
  height: '100%',
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',

  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

export default function ResponsiveDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  let navigate = useNavigate();
  const active = false;
  const itemsList = [
    {
      text: 'Dashboard',
      icon: <DashIcon fill={active ? '#3758CC' : '#3C3C3C'} />,
      onClick: () => navigate('/dashboard'),
    },
    {
      text: 'Reports',
      icon: <ReportIcon fill={active ? '#3758CC' : '#3C3C3C'} />,
      onClick: () => navigate('/dashboard/customers'),
    },
    {
      text: 'My Shop',
      icon: <MyShopIcon fill={active ? '#3758CC' : '#3C3C3C'} />,
      onClick: () => navigate('/dashboard/myshop'),
    },
    {
      text: 'Products',
      icon: <ReportedProductIcon fill={active ? '#3758CC' : '#3C3C3C'} />,
      onClick: () => navigate('/dashboard/products'),
    },
    {
      text: 'Customers',
      icon: <CustomerIcon fill={active ? '#3758CC' : '#3C3C3C'} />,
      onClick: () => navigate('/dashboard/customers'),
    },
  ];
  // let result = itemsList.map((a) => a.text);
  // console.log(result);

  return (
    <Drawer variant="permanent" open={open}>
      <List
        sx={{
          padding: '18px 8px',
        }}
      >
        <Avatar
          alt="Logo"
          variant="square"
          src={logo}
          sx={{ height: '16.75px', width: '51px', marginBottom: '39px' }}
        />
        {itemsList.map((item, index) => {
          const { text, icon, onClick } = item;
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
              {icon && (
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {icon}
                </ListItemIcon>
              )}
              <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItem>
          );
        })}
      </List>
      <BottomNav>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </BottomNav>
    </Drawer>
  );
}

const BottomNav = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
}));
