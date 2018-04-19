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
  width: "95%"
};

class TableExampleSimple extends Component {
  render() {
    return (
      <Table style={style}>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>ID</TableHeaderColumn>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Sport</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableRowColumn>1</TableRowColumn>
            <TableRowColumn>Dashers</TableRowColumn>
            <TableRowColumn>Baseball</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>2</TableRowColumn>
            <TableRowColumn>Little Dallas</TableRowColumn>
            <TableRowColumn>Football</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>3</TableRowColumn>
            <TableRowColumn>Rockets</TableRowColumn>
            <TableRowColumn>Basketball</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>4</TableRowColumn>
            <TableRowColumn>Vikings</TableRowColumn>
            <TableRowColumn>Football</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>5</TableRowColumn>
            <TableRowColumn>Little Raiders</TableRowColumn>
            <TableRowColumn>Football</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>5</TableRowColumn>
            <TableRowColumn>Knights</TableRowColumn>
            <TableRowColumn>Hockey</TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>
    );
  }
}

export default TableExampleSimple;
