import { useState, useRef } from 'react'
import { cuisines } from "./cuisines/cuisines";
import FoodIcon from "./foodIcon/foodIcon";
import styles from '../assets/App.module.css'
import Button from "./button/button";
import PopUp from './popup/popup';

export default function FoodIconList(props) {
    const [foodArray, setFoodArray] = useState( Array(cuisines.length).fill(true) );
    
    const dialogRef = useRef(null);

    const foodList = cuisines.map((cuisine, index) => (
        <FoodIcon
            name  = {cuisine.name}
            image = {cuisine.img}
            key   = {cuisine.name}
            isSelected = {foodArray[index]}
            handler = {() => toggleSelected(index)}
        />
    ));

    function toggleSelected(id) {
        setFoodArray((prev) =>
            prev.map((item, index) =>
                index === id ? !item : item,
            ),
        );
    }

    function chooseFinal () {
        const count = foodArray.filter(Boolean).length;
        var finalIndex;
        ;
        // playThinkingAnimation()
        const trueIndexes = foodArray
            .map((value, index) => value === true ? index : null)
            .filter(index => index !== null);
        if (trueIndexes.length > 0) {
            finalIndex = trueIndexes[Math.floor(Math.random() * trueIndexes.length)];
        }
        // console.log(cuisines[finalIndex])
        showPopup(cuisines[finalIndex])
    }

    function showPopup(item) {
        dialogRef.current?.startSequence(item);
    };

    return (
        <>
            <Button handler={() => chooseFinal()} />

            <PopUp
                ref={dialogRef}
            />

            <section className={styles.foodIconList}>
                {foodList}
            </section>
        </>
    )
}
