import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom'
import CSVReader from 'react-csv-reader'
import { connect } from 'react-redux';
import { dataSet, dataSetter } from './app/actions'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const rowStyles = {
  color: '#d3d3d3'
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state= {

    };

    this.handleForce = this.handleForce.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.renderEmail = this.renderEmail.bind(this);
  }

  handleForce() {
    var r;
    arguments[0].map((item, idx)=> {
      this.fetchData(item);
      this.props.dataSetter(item);
    })
  }

  fetchData(data) {
    fetch(`https://sherlock.ethx.co/verify.php?api=2949b6ea7c92ba187b726bd1c5e018a2&email=${data}`, {
            method: 'POST',
            header: {
                'Access-Control-Allow-Credentials': true,
                'Content-Type': 'applications/json',
            },
    })
    .then((res)=> res.json())
    .then((responseJson)=> {
      this.props.dataSet(responseJson.responseMessage);
    });
  }

  table(data, data1) {
    let len = []

    for(var i in data1)
      len.push(data1[(data1.length-1) - i])

    return (
    <Paper id= "pa" >
      <Table id= "row" >
        <TableHead  style= {rowStyles}>
          <TableRow  style= {rowStyles} id= "fonts">
            <TableCell style= {rowStyles}>S No</TableCell>
            <TableCell style= {rowStyles}>Emails</TableCell>
            <TableCell style= {rowStyles}>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          {data.map((row, idx) => (
            <TableRow  style= {rowStyles} key={row.id}>
              <TableCell  style= {rowStyles} component="th" scope="row">
                {idx + 1}
              </TableCell>
              <TableCell style= {rowStyles}>{row}</TableCell>
              <TableCell style= {rowStyles}>{len[idx]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
  }

  renderEmail(data) {
    return data.map((item, idx)=> {
      return (<li>{item}</li>)
    });
  }

  render() {
    return (
      <div className="App">
        <h3 style= {{color: 'white'}}>
          Dashboard
        </h3>

        <div id= "rowhai">
          <h4>
            Select a CSV or Excel with Emails
          </h4>

          <CSVReader
            cssClass="csv-reader-input"
            onFileLoaded={this.handleForce}
            inputStyle={{color: 'red', width: 300, borderRightRadius: 20}}
          />
        </div>

        <div className= "moreinfo">
          <ol>
          {
            this.table(this.props.rav.menu.emails, this.props.rav.menu.page)
          }
          </ol>
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { 
    rav: state
 };
}

export default connect (mapStateToProps, { dataSet, dataSetter })(App);
