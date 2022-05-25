import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MenuItems from './MenuItem';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../../asset/img/logo.png';
import Avatar from '@mui/material/Avatar';
import DashIcon from '../../asset/icons/dashboardIcon';
import ReportIcon from '../../asset/icons/reportIcon';
import MyShopIcon from '../../asset/icons/myshop';
import ReportedProductIcon from '../../asset/icons/reportedproduct';
import CustomerIcon from '../../asset/icons/customers';
import DeployIcon from '../../asset/icons/deploy';
import IntegrationIcon from '../../asset/icons/integration';
import EyeIcon from '../../asset/icons/eyeIcon';
import { sidebarVar } from './state/sidebarState';
import { toggleSideBar } from '../../redux/states/UI.slice';
import { RootState, useAppDispatch } from '../../redux/store';
import { useSelector } from 'react-redux';
import {
  CUSTOMERS,
  PRODUCTS,
  REPORT,
  DASHBOARD,
  MY_SHOP,
} from '../../constants/routes';
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
  [theme.breakpoints.down('md')]: {
    display: 'none !important',
  },
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
  let navigate = useNavigate();
  const dispatch = useAppDispatch();
  const open: boolean = useSelector((state: RootState) => state.UI.openSideBar);

  const handleDrawerToogle = () => {
    dispatch(toggleSideBar());
  };

  const topNav = [
    {
      text: 'Dashboard',
      icon: DashIcon,
      onClick: () => navigate(DASHBOARD),
    },
    {
      text: 'Reports',
      icon: ReportIcon,
      onClick: () => navigate(REPORT),
    },
    {
      text: 'My Shop',
      icon: MyShopIcon,
      onClick: () => navigate(MY_SHOP),
    },
    {
      text: 'Products',
      icon: ReportedProductIcon,
      onClick: () => navigate(PRODUCTS),
    },
    {
      text: 'Customers',
      icon: CustomerIcon,
      onClick: () => navigate(CUSTOMERS),
    },
  ];
  const bottomNav = [
    {
      text: 'Deploy',
      icon: DeployIcon,
      onClick: () => navigate('/dashboard/deploy'),
    },
    {
      text: 'Integration',
      icon: IntegrationIcon,
      onClick: () => navigate('/dashboard/integration'),
    },
    {
      text: 'Profile',
      icon: EyeIcon,
      onClick: () => navigate('/dashboard/profile'),
    },
  ];

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
        {topNav.map((item, index) => {
          const { text, icon, onClick } = item;
          return (
            <MenuItems
              key={index}
              text={text}
              icon={icon}
              open={open}
              onClick={onClick}
            />
          );
        })}
      </List>
      <BottomNav>
        {bottomNav.map((item, index) => {
          const { text, icon, onClick } = item;
          return (
            <MenuItems
              key={index}
              text={text}
              icon={icon}
              open={open}
              onClick={onClick}
            />
          );
        })}
        <IconButton onClick={handleDrawerToogle}>
          {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
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
  flexDirection: 'column',
}));
