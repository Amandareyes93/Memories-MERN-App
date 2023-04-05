import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'rgba(0, 0, 0, 0.54)',
    //  width: 100,
  },
  image: {
    marginLeft: '15px',
  },


  [theme.breakpoints.down('sm')]: {
  mainContainer: {
    display: 'flex',
    flexDirection: 'column-reverse',
  },
  itemContainer: {
    maxWidth: '100%'
  }
}
}));