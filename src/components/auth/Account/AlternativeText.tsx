import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { Props as AccountProps } from ".";

type Props = {
  altText: AccountProps["altText"];
  altLink: AccountProps["altLink"];
  altLinkText: AccountProps["altLinkText"];
};

const AlternativeText = ({ altText, altLink, altLinkText }: Props) => (
  <Typography variant="body1">
    {altText} <Link to={altLink}>{altLinkText}</Link>
  </Typography>
);

export default AlternativeText;
