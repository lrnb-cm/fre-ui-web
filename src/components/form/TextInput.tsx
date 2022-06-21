import {
  alpha,
  FormControl,
  InputBase,
  InputBaseProps,
  InputLabel,
  OutlinedInput,
  styled,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import {
  ChangeEvent,
  Dispatch,
  HTMLInputTypeAttribute,
  SetStateAction,
} from 'react';

interface TextInputProps extends InputBaseProps {
  label: string;
  // onChange: (inputValue: string) => void;
}

const StyledInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    position: 'relative',
    backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 12px',
    width: '100% !important',
    // boxShadow: '0px 3px 0px rgba(55, 88, 204, 0.1)',
    borderRadius: '16px',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

const useStyles = makeStyles((theme) => ({
  endAdornment: { right: '10px', position: 'absolute' },
}));

const TextInput = ({ id, label, endAdornment, ...rest }: TextInputProps) => {
  const classes = useStyles();
  return (
    <FormControl
      variant="standard"
      sx={{ width: '100%' }}
      style={{ marginTop: '10px' }}
    >
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
