import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          display: 'flex',
          flexDirection: 'column',
          '& a': {
            color: theme.palette.custom.fonts.highlight,
          },
          '& .button': {
            color: theme.palette.primary.main,
            '&:hover': {
              cursor: 'pointer',
            },
          },
        },
        label: {
          marginBottom: theme.spacing(2),
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        },
        seeMoreFooter: {
          paddingTop: theme.spacing(2),
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        mobile: {
          [theme.breakpoints.up('lg')]: {
            display: 'none',
          },
        },
        desktop: {
          display: 'none',
          [theme.breakpoints.up('lg')]: {
            display: 'block',
          },
        },
      });
    },
  )();

  return styles;
};
