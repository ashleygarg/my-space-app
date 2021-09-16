import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Row from "./row";
import {
    Table, 
    TableBody, 
    TableCell,
    TablePagination,
    TableContainer,
    TableHead, 
    TableRow,
    Paper,
} from "@material-ui/core";

const useRowStyles = makeStyles({
    margin: {
        margin: "3%"
    }
});

export default function CollapsibleTable(props) {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const classes = useRowStyles();
    const [data, setData] = useState(props?.data?.launchesPast.slice(0, rowsPerPage - 1))

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(event.target.value);
        setData(props?.data?.launchesPast.slice(0, event.target.value - 1));
        setPage(0);
    };

    return (
        <Paper className={classes.margin}>
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell>ID</TableCell>
                            <TableCell>Launch Date</TableCell>
                            <TableCell>Launch Site</TableCell>
                            <TableCell>Mission Name</TableCell>
                            <TableCell>Links</TableCell>
                            <TableCell>Rocket</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data?.map((row) => (
                            <Row key={row.name} row={row} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}