import react from "react";
import Row from "../Row/Row";
import "./Grid.css";

const Grid = props => {
    return(
        <div className="Grid">
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
        </div>
    )
}

export default Grid;