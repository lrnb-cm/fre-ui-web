import { useTheme } from "@material-ui/core";
import {
  Badge,
  Button,
  Grid,
  Paper,
  Skeleton,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import MailIcon from "../../asset/icons/mailIcon";
import PhoneIcon from "../../asset/icons/phoneIcon";
import PremiumIcon from "../../asset/icons/premiumIcon";
import { getMockData } from "./getMockData";

export type UserData = {
  picture: string;
  name: string;
  position: string;
  email: string;
  phone: string;
  membership: string;
  nextPayment: string;
  subscriptionId: string;
  price: string;
};

const ProfileContainer = () => {
  const theme = useTheme();
  const [userData, setUserData] = useState<UserData>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getMockData().then((userData) => {
      setUserData(userData);
      setLoading(false);
    });
  }, []);
  return (
    <Paper sx={{ borderRadius: 3 }}>
      <Grid
        container
        sx={{ padding: 2 }}
        direction={["column", "column", "row"]}
      >
        <Grid
          item
          xs={3}
          sx={{
            [theme.breakpoints.down("sm")]: {
              marginTop: theme.spacing(1),
            },
            backgroundImage: `url("/${userData?.picture}")`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            borderRadius: 4,
            minHeight: 264,
          }}
          order={[2, 2, 1]}
        >
          {loading ? <Skeleton height={384} /> : null}
        </Grid>
        <Grid
          container
          item
          xs={9}
          direction="column"
          spacing={3}
          sx={{ [theme.breakpoints.up("md")]: { padding: theme.spacing(1) } }}
          order={[1, 1, 2]}
        >
          <Grid item sx={{ marginLeft: "auto" }}>
            <Button
              variant="text"
              disabled={loading}
              sx={{ color: "text.secondary" }}
            >
              Edit Profile
            </Button>
          </Grid>
          <Grid item>
            <Typography variant="h2">
              {loading ? <Skeleton width="30%" height={70} /> : userData?.name}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" color="secondary">
              {loading ? (
                <Skeleton width="30%" height={50} />
              ) : (
                userData?.position
              )}
            </Typography>
          </Grid>
          <Grid container item direction="row" spacing={2} alignItems="center">
            <Grid item>
              <MailIcon />
            </Grid>{" "}
            <Grid item>
              <Typography variant="body1">
                {loading ? (
                  <Skeleton height={50} width={150} />
                ) : (
                  userData?.email
                )}
              </Typography>
            </Grid>
          </Grid>
          <Grid container item direction="row" spacing={2} alignItems="center">
            <Grid item>
              <PhoneIcon />
            </Grid>
            <Grid item>
              <Typography variant="body1">
                {loading ? (
                  <Skeleton height={50} width={150} />
                ) : (
                  userData?.phone
                )}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container sx={{ padding: 2 }}>
        <Grid item xs={0} md={3}></Grid>
        <Grid container item direction="column" xs={12} md={9}>
          <Grid container>
            <Grid
              item
              sx={{
                [theme.breakpoints.up("md")]: { marginLeft: theme.spacing(1) },
              }}
            >
              <hr />
            </Grid>
            <Grid
              container
              item
              spacing={3}
              alignItems="center"
              sx={{
                [theme.breakpoints.up("md")]: { padding: theme.spacing(1) },
              }}
            >
              <Grid item>
                <Typography variant="h2">Membership</Typography>
              </Grid>
              <Grid item>
                {loading ? (
                  <Skeleton
                    width={157}
                    height={70}
                    sx={{ borderRadius: theme.shape.borderRadius }}
                  />
                ) : (
                  <Badge
                    sx={{
                      backgroundColor: "#EBC052",
                      borderRadius: 4,
                      paddingX: 3,
                      paddingY: 0.5,
                    }}
                  >
                    <Grid container alignItems="center">
                      <Grid item>
                        <PremiumIcon />
                      </Grid>
                      <Grid item>
                        {userData?.membership === "premium" && (
                          <Typography variant="h6">Premium</Typography>
                        )}
                      </Grid>
                    </Grid>
                  </Badge>
                )}
              </Grid>
              <Grid item sx={{ marginLeft: "auto" }}>
                <Button
                  variant="text"
                  disabled={loading}
                  sx={{ color: "text.secondary" }}
                >
                  Edit Membership
                </Button>
              </Grid>
            </Grid>
            <Grid
              container
              item
              sx={{
                [theme.breakpoints.up("md")]: { padding: theme.spacing(1) },
              }}
              direction="row"
            >
              <Grid container direction="column" sm={4}>
                <Grid item>
                  <Typography color="secondary" variant="body1">
                    Next Payment
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body1">
                    {loading ? (
                      <Skeleton width="35%" height={50} />
                    ) : (
                      userData?.nextPayment
                    )}
                  </Typography>
                </Grid>
              </Grid>
              <Grid container direction="column" sm={4}>
                <Grid item>
                  <Typography color="secondary" variant="body1">
                    Subscription ID
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body1">
                    {loading ? (
                      <Skeleton width="35%" height={50} />
                    ) : (
                      userData?.subscriptionId
                    )}
                  </Typography>
                </Grid>
              </Grid>
              <Grid container direction="column" sm={4}>
                <Grid item>
                  <Typography color="secondary" variant="body1">
                    Price
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body1">
                    {loading ? (
                      <Skeleton width="35%" height={50} />
                    ) : (
                      userData?.price
                    )}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ProfileContainer;
