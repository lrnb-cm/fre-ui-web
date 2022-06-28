import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import { Button, Grid, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
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
            backgroundImage: `url("/${userData?.picture}")`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            borderRadius: 4,
            minHeight: 264,
          }}
          order={[2, 2, 1]}
        >
          <img src={userData?.picture} />
        </Grid>
        <Grid
          container
          item
          xs={9}
          direction="column"
          spacing={3}
          sx={{ padding: 4 }}
          order={[1, 1, 2]}
        >
          <Grid item sx={{ marginLeft: "auto" }}>
            <Button variant="text" sx={{ color: "text.secondary" }}>
              Edit Profile
            </Button>
          </Grid>
          <Grid item>
            <Typography variant="h2">{userData?.name}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" color="secondary">
              {userData?.position}
            </Typography>
          </Grid>
          <Grid container item direction="row" spacing={2}>
            <Grid item>
              <EmailIcon />
            </Grid>{" "}
            <Grid item>
              <Typography variant="body1">{userData?.email}</Typography>
            </Grid>
          </Grid>
          <Grid container item direction="row" spacing={2}>
            <Grid item>
              <PhoneIcon />
            </Grid>
            <Grid item>
              <Typography variant="body1">{userData?.phone}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ProfileContainer;
