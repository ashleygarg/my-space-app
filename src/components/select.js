import {
    Select
} from "@material-ui/core";

export default function SelectBox(props) {
    return (
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={props.value}
            onChange={props.onChange}
        >
            {props.list}
        </Select>
    )
}