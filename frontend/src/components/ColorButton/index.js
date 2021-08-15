import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import yellow from '@material-ui/core/colors/yellow';
import red from '@material-ui/core/colors/red';
import grey from '@material-ui/core/colors/grey';

export const ColorButton = withStyles(() => ({
  root: {
    width: '70%',
    color: 'white',
    margin: 10,
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
}))(Button);

export default ColorButton;

export const YellowButton = withStyles(() => ({
  root: {
    width: '70%',
    color: 'white',
    margin: 10,
    backgroundColor: yellow[700],
    '&:hover': {
      backgroundColor: yellow[800],
    },
  },
}))(Button);

export const RedButton = withStyles(() => ({
  root: {
    width: '70%',
    color: 'white',
    margin: 10,
    backgroundColor: red[600],
    '&:hover': {
      backgroundColor: red[800],
    },
  },
}))(Button);

export const BlackButton = withStyles(() => ({
  root: {
    color: 'white',
    margin: 20,
    backgroundColor: grey[900],
    '&:hover': {
      backgroundColor: grey[800],
    },
  },
}))(Button);

