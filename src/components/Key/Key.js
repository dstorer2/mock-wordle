import {useState} from "react";
import "./Key.css";

const Key = props => {
    const [display, setDisplay] = useState(
        {
            class: "defaultKey",
            value: props.value
        }
    )

    const handleClick = event => {
        event.preventDefault();
        alert("You clicked a button!")
    }

    return(
        <button
            className={display.class}
            onClick={props.keyFunction}
            value={display.value}
        >
            {display.value}
        </button>
    )
}

export default Key;