import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

const ColorButton = withStyles(() => ({
  root: {
    color: 'white',
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
}))(Button);

export default ColorButton;
