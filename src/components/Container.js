import react from "react";
import { useState } from "react/cjs/react.production.min";
import Navbar from "./Navbar";
import Grid from "./Grid";

const Container = props => {
    return(
        <div>
            <Navbar />
            <Grid />
        </div>
    )
}

export default Container;