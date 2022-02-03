import { useEffect, useState } from "react";
import Cell from "../Cell/Cell";

const Row = props => {
    const [loaded, setLoaded] = useState(false)
    const cells = useEffect(() => {
        props.cellData.map(cell => {
            <Cell value={cell} />
        })
        setLoaded(true);
    }, []);
    if(loaded){
        return(
            <div>{cells}</div>
        )
    }else{
        return(
            <div>
                loading...
            </div>
        )
    }
}

export default Row;