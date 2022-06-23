import React, { useEffect } from 'react';
import { useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useNavigate } from 'react-router-dom';
import { Chip } from '@mui/material';
import { getAllStaff, fireStaff} from "./Axios/StaffAPI";

const StaffTable = () => {

  const columns = [
    { id: 'firstName', label: 'First Name', minWidth: 170 },
    { id: 'lastName', label: 'Last Name', minWidth: 100 },
    { id: 'deleteButton', minWidth: 100}
  ];

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  }
  const [staff, setStaff] = useState([]);

  useEffect(() => {
    getAllStaff(setStaff);
  })

  function terminateStaff(id){
    fireStaff(setStaff, id)
  }

  const navigate = useNavigate();

  function goToStaff(id) {
    navigate("/staffpage/" + id)
  }

  function createData(id, firstName, lastName, deleteButton) {
    return { id, firstName, lastName, deleteButton};
  }

  const rows = staff.map(sta => createData(sta.id,
    sta.firstName,
    sta.lastName,
     <Chip label="Terminate" variant="soft" onDelete={()=>terminateStaff(sta.id)} />
     ))

  return (
    <>
    <section>
    <Paper sx={{ width: '100%', overflow: 'hidden'}}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow onClick={() => goToStaff(row['id'])} hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </section>
    </>
  )

}


export default StaffTable;