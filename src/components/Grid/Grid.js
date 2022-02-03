import {useState, useEffect} from "react";
import Row from "../Row/Row";
import "./Grid.css";


const Grid = props => {
    const [loaded, setLoaded] = useState(false)
    const gridArray = props.gridData;
    const rows = useEffect(() => {
        console.log("Grid useEffect prop", gridArray)
        gridArray.map(row => {
            console.log("Grid component gridData map", row)
        })
        setLoaded(true);
    }, []);
    
    const display = <div>{rows}</div>
    const wait = <div>loading...</div>

    // loaded ? display : wait

    if(loaded){
        return(
            display
        )
    }else{
        return(
            <div>loading...</div>
        )
    }
}

export default Grid;