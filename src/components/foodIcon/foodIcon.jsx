// import React from "react";
import styles from "./foodIcon.module.css";

export default function FoodIcon(props) {
    return (
        <div className={styles.wrapper}>
            <button className={props.isSelected ? styles.selected : styles.unselected} onClick={props.handler}>
                <div className={styles.image}>
                    <img src={props.image} />
                </div>
                <div className={styles.name}>
                    {props.name}
                </div>
            </button>
        </div>
    )
}