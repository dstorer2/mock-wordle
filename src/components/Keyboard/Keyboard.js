import react from "react";
import Backspace from "../Backspace/Backspace";
import EnterButton from "../EnterButton/EnterButton";
import Key from "../Key/Key";

const Keyboard = props => {
    return (
        <div className="Keyboard">
            <div className="keyRow">
                <Key keyFunction={props.keyFunction} value="Q"/>
                <Key keyFunction={props.keyFunction} value="W"/>
                <Key keyFunction={props.keyFunction} value="E"/>
                <Key keyFunction={props.keyFunction} value="R"/>
                <Key keyFunction={props.keyFunction} value="T"/>
                <Key keyFunction={props.keyFunction} value="Y"/>
                <Key keyFunction={props.keyFunction} value="U"/>
                <Key keyFunction={props.keyFunction} value="I"/>
                <Key keyFunction={props.keyFunction} value="O"/>
                <Key keyFunction={props.keyFunction} value="P"/>
            </div>
            <div className="keyRow">
                <Key keyFunction={props.keyFunction} value="A"/>
                <Key keyFunction={props.keyFunction} value="S"/>
                <Key keyFunction={props.keyFunction} value="D"/>
                <Key keyFunction={props.keyFunction} value="F"/>
                <Key keyFunction={props.keyFunction} value="G"/>
                <Key keyFunction={props.keyFunction} value="H"/>
                <Key keyFunction={props.keyFunction} value="J"/>
                <Key keyFunction={props.keyFunction} value="K"/>
                <Key keyFunction={props.keyFunction} value="L"/>
            </div>
            <div className="keyRow">
                <EnterButton />
                <Key keyFunction={props.keyFunction} value="Z"/>
                <Key keyFunction={props.keyFunction} value="X"/>
                <Key keyFunction={props.keyFunction} value="C"/>
                <Key keyFunction={props.keyFunction} value="V"/>
                <Key keyFunction={props.keyFunction} value="B"/>
                <Key keyFunction={props.keyFunction} value="N"/>
                <Key keyFunction={props.keyFunction} value="M"/>
                <Backspace />
            </div>
        </div>
    )
}

export default Keyboard;