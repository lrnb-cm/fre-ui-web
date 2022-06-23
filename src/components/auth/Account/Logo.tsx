import { Box, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import logo from '../../../asset/img/Logo.svg';
const useStyles = makeStyles((theme: Theme) => ({
  logo: {
    cursor: 'pointer',
  },
}));

const Logo = () => {
  const classes = useStyles();
  return (
    <Box p={1} className={classes.logo}>
      <img src={logo} />
    </Box>
  );
};

export default Logo;
