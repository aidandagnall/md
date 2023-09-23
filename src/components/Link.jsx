import React from "react";
import { Link } from "react-router-dom";

function LinkComponent(props) {
    return (
        <span className="whitespace-nowrap">
            [<Link className="text-blue-600 dark:text-blue-400" to={props.to}>{props.name}
            </Link>](<Link className="text-blue-600 dark:text-blue-400" to={props.to} >{props.to}</Link>)
        </span>
    )
}

export default LinkComponent;