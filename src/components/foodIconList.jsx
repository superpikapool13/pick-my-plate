import { cuisines } from "./cuisines/cuisines";
import FoodIcon from "./foodIcon/foodIcon";
import styles from '../assets/App.module.css'
import Button from "./button/button";

export default function FoodIconList(props) {
    const foodList = cuisines.map((cuisine) => (
        <FoodIcon
            name  = {cuisine.name}
            image = {cuisine.img}
            key   = {cuisine.name}
        />
    ));

    return (
        <>
            <Button />

            <section className={styles.foodIconList}>
                {foodList}
            </section>
        </>
    )
}
