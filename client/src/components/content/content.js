import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import style from './content.css';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

class Content extends Component {
    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <main>
                    <div className="hero-image">
                        <Container className="hero-content" maxWidth="sm" >
                            <p className="hero-text">The bridge connect students and non-profit organization</p>

                        </Container>
                    </div>
                    <Container className="main-content" maxWidth="md">
                        {/* End hero unit */}
                        <Grid container spacing={4}>
                            {cards.map(card => (
                                <Grid item key={card} xs={12} sm={6} md={4}>
                                    <Card>
                                        <CardMedia className="card-media"
                                            image="http://www.personal.psu.edu/users/n/y/nys5290/Project-Image.jpg"
                                            title="Image title"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Project Title
                                            </Typography>
                                            <Typography>
                                                Project description
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small" color="primary">
                                                View
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </main>
            </React.Fragment>
        );
    }
}

export default Content;