// import React from "react";
import styles from "./description.module.css";

export default function Description(props) {
    return (
        <section className={styles.description}>
            <p>
                Tired of choosing what to eat?
            </p>
            <p>
                Simply select or deselect the cuisines you like, and let us decide for you!
            </p>
            <p>
                Bon Appetit!
            </p>
        </section>
    );
}
