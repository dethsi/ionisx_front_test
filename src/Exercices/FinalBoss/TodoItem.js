import React, { Component } from 'react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';


export default class TodoItem extends Component {
    render() {
        return (
            <li>
                <Button
                    color={this.props.item.done ? 'primary' : 'danger'}
                    onClick={this.props.onClick}
                >
                    {this.props.item.text}
                </Button>
            </li>
        )
    }
}

TodoItem.propTypes = {

    item: PropTypes.object.isRequired
}
