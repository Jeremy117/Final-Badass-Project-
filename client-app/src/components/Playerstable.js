import React, { Component } from "react";
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from "material-ui/Table";

class Playerstable extends Component {
  render() {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Position</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableHeaderColumn>Jeremy</TableHeaderColumn>
            <TableRowColumn>Version Control Manager</TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>
    );
  }
}

export default Playerstable;
