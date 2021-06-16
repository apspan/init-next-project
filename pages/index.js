import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  mainContent: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
      <Container maxWidth={false} disableGutters>
        <Container maxWidth={"lg"} disableGutters className={classes.mainContent}>
          <Typography variant="h1" gutterBottom>
            I am the demo!
          </Typography>
        </Container>
      </Container>
  )
}
