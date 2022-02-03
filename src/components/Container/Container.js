import Cell from "../Cell/Cell";
import { useState, useEffect } from "react";
import "./Container.css";

const Container = props => {
    const [loaded, setLoaded] = useState(false);
    const [grid, setgrid] = useState();

    useEffect(() => {
        setgrid(props.grid);
        setLoaded(true);
    }, [])

    if(loaded){
        return(
            <div className="Container">
                {grid.map((item, index) => {
                    return (
                        <div className="Row" key={index}>
                            {item.map((cell, i) => {
                                return <Cell value={cell.value} class={cell.class}/>
                            })}
                        </div>
                    )
                })}
            </div>
        )
    }else{
        return(
            <div>
                loading...
            </div>
        )
    }
}

export default Container;