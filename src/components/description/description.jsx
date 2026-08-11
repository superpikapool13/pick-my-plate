// import React from "react";
import styles from "./description.module.css";

export default function Description(props) {
    return (
        <section className={styles.description}>
            <p>
                Can't decide what to choose to eat? We can help!
            </p>
            <p>
                Simply select or deselect the cuisines that are acceptable to you, and then click "Choose!"
                <br />
                This will select a cuisine for you, taking the weight of the choice off your shoulders.
            </p>
            <p>
                Bon Appetit!
            </p>
        </section>
    );
}
