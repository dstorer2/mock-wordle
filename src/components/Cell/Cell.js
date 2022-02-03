import "./Cell.css"

const Cell = props => {
    return(
        <div className={props.class}>
            {props.value}
        </div>
    )
}

export default Cell;