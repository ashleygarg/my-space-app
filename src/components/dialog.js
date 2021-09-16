import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
    DialogTitle,
    Dialog,
    Typography,
    Grid,
    InputLabel,
    MenuItem,
    FormControl
} from "@material-ui/core";
import Select from "./select";

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '5%'
    },
    grid: {
        margin: '1%'
    },
    select: {
        minWidth: 150,
        margin: theme.spacing(1),
    }
}));

function SimpleDialog(props) {
    const classes = useStyles();
    const { onClose, selectedValue, open, data } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    const [space1, setSpace1] = React.useState('');
    const [space2, setSpace2] = React.useState('');
    const [spaceObject2, setSecondComparedData] = React.useState({});
    const [spaceObject1, setFirstComparedData] = React.useState({});

    const handleChangeSpace1 = (event) => {
        setSpace1(event.target.value);
        setFirstComparedData(data?.launchesPast?.find(element => {
            return element.mission_name === event.target.value
        }));
    };

    const handleChangeSpace2 = (event) => {
        setSpace2(event.target.value);
        setSecondComparedData(data?.launchesPast?.find(element => {
            return element.mission_name === event.target.value
        }));
    };
    return (
        <Dialog fullWdith onClose={handleClose} aria-labelledby="simple-dialog-title" open={open} maxWidth="sm">
            <DialogTitle style={{ textAlign: 'center', alignSelf: 'center' }} id="simple-dialog-title">Compare Space launches</DialogTitle>
            <Grid className={classes.root} container>
                <Grid className={classes.grid} item xs={6}>
                    <FormControl className={classes.select}>
                        <InputLabel id="demo-simple-select-label">Mission Name</InputLabel>
                        <Select onChange = {handleChangeSpace1} value={space1} list = {data?.launchesPast?.map(element => <MenuItem value={element.mission_name}>{element.mission_name}</MenuItem>)} />
                    </FormControl>
                    {spaceObject1.id && <><Typography variant="button" display="block" gutterBottom>
                        Launch Date : {spaceObject1?.launch_date_local}
                    </Typography>
                        <Typography variant="button" display="block" gutterBottom>
                            Rocket name : {spaceObject1?.rocket?.rocket_name}
                        </Typography>
                        <Typography variant="button" display="block" gutterBottom>
                            Rocket type : {spaceObject1?.rocket?.rocket_type}
                        </Typography>
                        <Typography variant="button" display="block" gutterBottom>
                            Launch Site : {spaceObject1?.launch_site?.site_name_long}
                        </Typography></>}
                </Grid>
                <Grid item xs={6}>
                    <FormControl className={classes.select}>
                        <InputLabel id="demo-simple-select-label">Mission Name</InputLabel>
                        <Select onChange = {handleChangeSpace2} value={space2} list = {data?.launchesPast?.map(element => <MenuItem value={element.mission_name}>{element.mission_name}</MenuItem>)} />
                        {spaceObject2.id && <><Typography variant="button" display="block" gutterBottom>
                            Launch Date : {spaceObject2?.launch_date_local}
                        </Typography>
                            <Typography variant="button" display="block" gutterBottom>
                                Rocket name : {spaceObject2?.rocket?.rocket_name}
                            </Typography>
                            <Typography variant="button" display="block" gutterBottom>
                                Rocket type : {spaceObject2?.rocket?.rocket_type}
                            </Typography>
                            <Typography variant="button" display="block" gutterBottom>
                                Launch Site : {spaceObject2?.launch_site?.site_name_long}
                            </Typography></>}
                    </FormControl>
                </Grid>
            </Grid>
        </Dialog>
    );
}

SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
};

export default SimpleDialog;
