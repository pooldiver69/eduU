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
import './content.css';
import { Modal } from 'react-bootstrap';

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

function MyVerticallyCenteredModal(props) {
    console.log(props)
    console.log(props.state)
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
          </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Centered Modal</h4>
                <p>
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}


class Content extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalShow: false,
            data: {},
            dataIsLoaded: false
        }
    }

    componentDidMount() {
        console.log("enter did mount")
        return fetch('../module/data.json')
            .then((res) => {
                console.log(res)
                res.json()
            })
            .then((data) => {
                console.log('data:', data);
                this.setState({ dataIsLoaded: true })
                console.log(this.state)
            })
            .catch(err => {
                alert(err.message)
            })
    }

    render() {
        if (this.state.dataIsLoaded) {
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
                                {this.state.data.map(card => (
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
                                                <Button size="small" color="primary" onClick={() => this.setState({ modalShow: true, data: card })}>
                                                    View
                                                </Button>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        </Container>
                        <MyVerticallyCenteredModal
                            show={this.state.modalShow}
                            onHide={() => this.setState({ modalShow: false })}
                        />
                    </main>
                </React.Fragment>
            )
        }
        else {
            return (
                <React.Fragment>
                    <CssBaseline />
                    <main>
                        <div className="hero-image">
                            <Container className="hero-content" maxWidth="sm" >
                                <p className="hero-text">The bridge connect students and non-profit organization</p>

                            </Container>
                        </div>
                    </main>
                </React.Fragment>
            )
        }
    }
}

export default Content;