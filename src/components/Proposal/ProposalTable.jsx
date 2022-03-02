import * as React from 'react';
import { styled } from '@mui/system';
import TablePaginationUnstyled from '@mui/base/TablePaginationUnstyled';
import './ProposalTable.css'

function createData(company, proposal, scope,status, date ) {
  return { company, proposal, scope, status , date};
}

const rows = [
  createData('ACME1', 'Opp 01', 'Skid 1', 'Lead', '1-May'),
  createData('ACME2', 'Opp 01', 'Skid 1', 'Lead', '1-May'),
  createData('ACME3', 'Opp 01', 'Skid 1', 'Lead', '1-May'),
  createData('ACME4', 'Opp 01', 'Skid 1', 'Lead', '1-May'),
].sort((a, b) => (a.calories < b.calories ? -1 : 1));

const Root = styled('div')`
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  td,
  th {
    border: 1px solid #ddd;
    text-align: left;
    padding: 8px;
  }

  th {
    background-color: #ddd;
  }
`;


export default function UnstyledTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(8);

  // Avoid a layout jump when reaching the last page with empty rows.

  return (
    <Root style={{marginLeft:"150px"}}  sx={{ maxWidth: '100%', width: 830}}>
      <table style={{height:"100",backgroundColor:"white"}} aria-label="custom pagination table">
        <thead>
          <tr>
            <th>Company</th>
            <th>Proposal Title</th>
            <th>Scope</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <tr key={row.company}>
              <td>{row.company}</td>
              <td style={{ width: 150 }} align="right">
                {row.proposal}
              </td>
              <td style={{ width: 150 }} align="right">
                {row.scope}
              </td>
              <td style={{ width: 150 }} align="right">
                {row.status}
              </td>
              <td style={{ width: 150 }} align="right">
                {row.date}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
          </tr>
        </tfoot>
      </table>
    </Root>
  );
}
