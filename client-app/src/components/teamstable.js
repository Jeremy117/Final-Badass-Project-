import React, { Component } from "react";
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from "material-ui/Table";

const style = {
  marginLeft: 20,
  width: "95%"
};

class TableExampleSimple extends Component {
  render() {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Sport</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableRowColumn />
            <TableRowColumn>Baseball</TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>
    );
  }
}

export default TableExampleSimple;
