// import React from "react";
import styles from "./popup.module.css";

export default function FoodIcon(props) {
    return (
        <div className={styles.wrapper} ref={props.box}>
            <div className={styles.image}>
                <img ref={props.image} />
            </div>
            <div className={styles.name} ref={props.name}>
            </div>
        </div>
    )
}