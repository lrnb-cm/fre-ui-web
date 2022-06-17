import { Box, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  logo: {
    borderRadius: 16,
    backgroundColor: theme.palette.common.white,
  },
}));

const Logo = () => {
  const classes = useStyles();
  return (
    <Box p={2} className={classes.logo}>
      <img src="/logo.png" />
    </Box>
  );
};

export default Logo;
