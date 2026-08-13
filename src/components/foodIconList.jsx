import { useState, useRef } from 'react'
import { cuisines } from "./cuisines/cuisines";
import FoodIcon from "./foodIcon/foodIcon";
import styles from '../assets/App.module.css'
import Button from "./button/button";
import PopUp from './popup/popup';

export default function FoodIconList(props) {
    const [foodArray, setFoodArray] = useState( Array.from({ length: cuisines.length }, () => Math.random() >= 0.5) );
    
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

    function selectAll() {
        setFoodArray((prev) => prev.map(() => true))
    }

    function unselectAll() {
        setFoodArray((prev) => prev.map(() => false))
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

    function ButtonList() {
        return (
            <section className={styles.ButtonList}>
                <Button 
                    text = "Select All!"
                    handler={() => selectAll()} 
                />

                <Button 
                    text = "Choose!"
                    handler={() => chooseFinal()} 
                />

                <Button 
                    text = "Unselect All!"
                    handler={() => unselectAll()} 
                />
            </section>
        )
    }

    return (
        <>
            <ButtonList />

            <PopUp
                ref={dialogRef}
            />

            <section className={styles.foodIconList}>
                {foodList}
            </section>
        </>
    )
}
