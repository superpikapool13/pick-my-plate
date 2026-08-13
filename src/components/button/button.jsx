// import React from "react";
import styles from "./button.module.css";

export default function Button(props) {
    return (
        <button
            onClick={props.handler}
            className={styles.button}
        >
            {props.text}
        </button>
    )
}