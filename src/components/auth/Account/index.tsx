import { Grid, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import AlternativeText from './AlternativeText';
import Logo from './Logo';
import forgotpassword from '../../../asset/img/forgotpassword.svg';

const useStyles = makeStyles((theme: Theme) => ({
  contentContainer: {
    background: theme.palette.background.default,
    [theme.breakpoints.up('md')]: {
      paddingLeft: theme.spacing(15),
    },
    paddingLeft: theme.spacing(5),
  },
  mobileLogoContainer: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  mainContainer: {
    maxHeight: '100vh',
    height: '100vh',
    position: 'relative',
  },
  logoContainer: {
    position: 'absolute',
    top: '15px',
    left: '40px',
  },
  imgContainer: {
    height: '100%',
    width: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  mainText: {
    padding: theme.custom.pxToRem(110, 10, 80, 80),
    [theme.breakpoints.down('sm')]: {
      paddingTop: 0,
    },
  },
  alternateText: {
    paddingLeft: theme.custom.pxToRem(48),
    paddingTop: theme.custom.pxToRem(60),
  },
  showOnDesktopOnly: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  showOnMobileOnly: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  sidebar: {
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  svgContainer: {
    overflow: 'hidden',
    [`${theme.breakpoints.down('sm')}`]: {
      display: 'none',
    },
  },
}));

export interface Props {
  altLink: string;
  altLinkText: string;
  altText: string;
  bodyText: string;
  headingText: string;
  children: JSX.Element | JSX.Element[];
  image: any;
}

const Account: React.FunctionComponent<Props> = ({
  altLink,
  altLinkText,
  altText,
  bodyText,
  headingText,
  children,
  image,
}: Props) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.mainContainer}>
      <Grid
        item
        container
        direction="column"
        justifyContent="space-around"
        alignItems="flex-start"
        md={4}
        sm={0}
        className={classes.imgContainer}
      >
        <Grid item md={2} className={classes.logoContainer}>
          <Logo />
        </Grid>
        <img src={image} className={classes.image} />
      </Grid>
      <Grid
        item
        container
        direction="column"
        justifyContent="flex-start"
        flexGrow={2}
        className={classes.mainText}
        spacing={2}
        sm={24}
        md={5}
      >
        <Grid item>
          <Typography variant="h2">{headingText}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" pr={8}>
            {bodyText}
          </Typography>
        </Grid>
        <Grid item container direction="row" spacing={2}>
          {children}
        </Grid>
      </Grid>

      <Grid item md={3} sm={24} className={classes.alternateText}>
        <AlternativeText
          altText={altText}
          altLink={altLink}
          altLinkText={altLinkText}
        />
      </Grid>
    </Grid>
  );
};

export default Account;
