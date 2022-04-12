import { Grid, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import AlternativeText from "./AlternativeText";
import Logo from "./Logo";

const useStyles = makeStyles((theme: Theme) => ({
  contentContainer: {
    background: theme.palette.background.default,
    [theme.breakpoints.up("md")]: {
      paddingLeft: theme.spacing(15),
    },
    paddingLeft: theme.spacing(5),
  },
  mobileLogoContainer: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  mainContainer: {
    minHeight: "100vh",
  },
  mainText: {
    [theme.breakpoints.down("sm")]: {
      paddingTop: 0,
    },
    marginTop: theme.spacing(5),
  },
  showOnDesktopOnly: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  showOnMobileOnly: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  sidebar: {
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  svgContainer: {
    overflow: "hidden",
    [`${theme.breakpoints.down("sm")}`]: {
      display: "none",
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
}

const Account: React.FunctionComponent<Props> = ({
  altLink,
  altLinkText,
  altText,
  bodyText,
  headingText,
  children,
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
        className={classes.sidebar}
        sm={4}
      >
        <Grid item md={2} pt={2} pl={5}>
          <Logo />
        </Grid>
        <Grid item container justifyContent="space-between" md={2} pl={5}>
          <Grid item>
            <Typography variant="h2" color="white">
              Freeing Returns
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" color="white" pr={5}>
              Empowers Retailers to Master Returns Management and Reduce Total
              Retail Loss
            </Typography>
          </Grid>
        </Grid>
        <Grid item alignSelf="flex-end" md={8} className={classes.svgContainer}>
          <img src="/Big Shoes Hero.svg" height="auto" width="100%" />
        </Grid>
      </Grid>
      <Grid
        container
        item
        bgcolor="default"
        direction="column"
        justifyContent="flex-start"
        sm={8}
        py={5}
        className={classes.contentContainer}
      >
        <Grid
          item
          alignSelf="flex-end"
          pr={5}
          className={classes.showOnDesktopOnly}
        >
          <AlternativeText
            altText={altText}
            altLink={altLink}
            altLinkText={altLinkText}
          />
        </Grid>
        <Grid
          item
          className={classes.mobileLogoContainer}
          alignSelf="flex-start"
        >
          <Logo />
        </Grid>
        <Grid
          item
          container
          direction="column"
          justifyContent="flex-start"
          flexGrow={2}
          className={classes.mainText}
          spacing={2}
        >
          <Grid item>
            <Typography variant="h2">{headingText}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1">{bodyText}</Typography>
          </Grid>
          {children}
        </Grid>
        <Grid item alignSelf="center" className={classes.showOnMobileOnly}>
          <AlternativeText
            altText={altText}
            altLink={altLink}
            altLinkText={altLinkText}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Account;
