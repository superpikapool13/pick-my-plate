// import React from "react";
import styles from "./foodIcon.module.css";

export default function FoodIcon(props) {
    return (
        <div className={styles.wrapper}>
            <div className={props.isSelected ? styles.selected : styles.unselected}>
                <div className={styles.image}>
                    <img src={props.image} />
                </div>
                <div className={styles.name}>
                    {props.name}
                </div>
            </div>
        </div>
    )
}