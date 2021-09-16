
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Box,
    Collapse,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography
} from "@material-ui/core";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const useRowStyles = makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
    },
    margin: {
        margin: "3%"
    }
});

export default function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    const classes = useRowStyles();

    return (
        <React.Fragment>
            <TableRow className={classes.root}>
                <TableCell width="2%">
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell width="5%" align="left">{row.id}</TableCell>
                <TableCell component="th" width="10%" scope="row">
                    {row.launch_date_local}
                </TableCell>
                <TableCell width="10%" align="left">{row?.launch_site.site_name_long}</TableCell>
                <TableCell width="10%" align="left">{row?.mission_name}</TableCell>
                <TableCell width="10%" align="left">{`${row?.links.article_link}, ${row?.links.video_link}`}</TableCell>
                <TableCell width="10%" align="left">{row?.rocket?.rocket_name}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <Typography variant="h6" gutterBottom component="div">
                                Ships History
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Name</TableCell>
                                        <TableCell>Id</TableCell>
                                        <TableCell>Type</TableCell>
                                        <TableCell>Home Port</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.ships.map((historyRow) => (
                                        <TableRow key={historyRow?.date}>
                                            <TableCell component="th" scope="row">
                                                {historyRow?.name}
                                            </TableCell>
                                            <TableCell>{historyRow?.id}</TableCell>
                                            <TableCell>{historyRow?.type}</TableCell>
                                            <TableCell>{historyRow?.home_port}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}