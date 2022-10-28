import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class TokensTable extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr>
                <td class="text-center">{this.props.obj._id}</td>
                <td class="text-center">{this.props.obj.Token_body}</td>
            </tr>
        );
    }
}