import react from "react";
import Cell from "./Cell";
import "./Row.css";

const Row = props => {
    return(
        <div className="Row">
            <Cell/>
            <Cell/>
            <Cell/>
            <Cell/>
            <Cell/>
        </div>
    )
}

export default Row;