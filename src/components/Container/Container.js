import react from "react";
import Navbar from "../Navbar/Navbar";
import Grid from "../Grid/Grid";
import Keyboard from "../Keyboard/Keyboard";

const Container = props => {
    return(
        <div>
            <Navbar />
            <Grid />
            <Keyboard />
        </div>
    )
}

export default Container;