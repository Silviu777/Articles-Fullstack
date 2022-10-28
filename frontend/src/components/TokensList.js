import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import TokensTable from "./TokensTable";
import './table.css'

export default class TokensList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            tokens: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/tokens')
            .then(res => {
                this.setState({
                    tokens: res.data
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    DataTable() {
        return this.state.tokens.map((res, i) => {
            return <TokensTable obj={res} key={i} />;
        });
    }


    render() {
        return (<div id="tokenTable" className="table-wrapper">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th id="thId" class="text-center">Id</th>
                        <th class="text-center">Body</th>

                    </tr>
                </thead>
                <tbody>
                    {this.DataTable()}
                </tbody>
            </Table>
        </div>);
    }
}