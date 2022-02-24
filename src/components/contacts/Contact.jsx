import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, Avatar, CardContent, Typography, CardActions, Collapse, IconButton } from '@mui/material';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import { Consumer } from './../../Context'
import { Link } from 'react-router-dom';
class Contact extends Component {
    constructor() {
        super();
        this.state = {
            expanded: false
        }
    }
    onClickHeart = (email, e) => {
        console.log("hello");
        this.setState({
            expanded: !this.state.expanded
        })
    }
    onclickDelete = (id, dispatch) => {
        dispatch({ type: "DELETE_CONTACTS", payload: id })
        // console.log( this.props );
        // this.props.deleteClickHandle(id);
    }
    render() {
        const { name, email, phone, id } = this.props.contact;
        const { expanded } = this.state;

        return (
            <Consumer>
                {
                    value => {
                        const { dispatch } = value;
                        return (
                            <React.Fragment>
                                <Card style={{ marginBottom: "25px" }}>
                                    <CardHeader
                                        avatar={
                                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                                R
                                            </Avatar>
                                        }
                                        action={
                                            <IconButton aria-label="settings" onClick={this.onclickDelete.bind(this, id, dispatch)}>
                                                <CloseIcon />
                                            </IconButton>
                                        }
                                        title={name}
                                        subheader={phone}
                                    />
                                    {expanded &&
                                        <CardContent>
                                            <Typography variant="body2" color="text.secondary">
                                                {email}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {phone}
                                            </Typography>
                                        </CardContent>
                                    }
                                    <CardActions disableSpacing>
                                        <IconButton sx={{ color: expanded ? 'red' : "" }} onClick={this.onClickHeart.bind(this, email)}
                                            aria-label="add to favorites">
                                            <FavoriteIcon />
                                        </IconButton>
                                        <Link to={`/AboutComponentClass/${id}`}>
                                        <IconButton aria-label="share" onClick={() => console.log('edit clicked')}>
                                            <EditIcon />
                                        </IconButton>
                                        </Link>
                                    </CardActions>
                                </Card>
                            </React.Fragment>
                        )
                    }
                }
            </Consumer>

        );
    }
}

Contact.propTypes = {
    //   name: PropTypes.string.isRequired,
    //   email: PropTypes.string.isRequired,
    //   phone: PropTypes.string.isRequired,
    contact: PropTypes.object.isRequired,
};
export default Contact;