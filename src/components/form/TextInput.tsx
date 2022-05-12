import {
  alpha,
  FormControl,
  InputBase,
  InputBaseProps,
  InputLabel,
  OutlinedInput,
  styled,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import {
  ChangeEvent,
  Dispatch,
  HTMLInputTypeAttribute,
  SetStateAction,
} from "react";

interface TextInputProps extends InputBaseProps {
  label: string;
  // onChange: (inputValue: string) => void;
}

const StyledInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
    border: "1px solid #ced4da",
    fontSize: 16,
    width: "auto",
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

const useStyles = makeStyles((theme) => ({
  endAdornment: { transform: "translateX(-50px) !important" },
}));

const TextInput = ({ id, label, endAdornment, ...rest }: TextInputProps) => {
  const classes = useStyles();
  return (
    <FormControl variant="standard">
      <InputLabel shrink htmlFor={id}>
        <Typography variant="h5" color="black">
          {label}
        </Typography>
      </InputLabel>
      <StyledInput
        id={id}
        endAdornment={
          <div className={classes.endAdornment}>{endAdornment}</div>
        }
        {...rest}
      />
    </FormControl>
  );
};

export default TextInput;