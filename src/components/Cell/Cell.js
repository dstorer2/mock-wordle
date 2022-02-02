import react, { useState } from "react";
import "./Cell.css"

const Cell = props => {
    const [letter, setLetter] = useState("");

    return(
        <div className="Cell">
            {letter}
        </div>
    )
}

export default Cell;