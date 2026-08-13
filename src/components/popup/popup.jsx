import { useRef } from 'react';
import styles from './popup.module.css'
import { cuisines } from '../cuisines/cuisines.js';
import PopupFoodIcon from './popupFoodIcon';
import confetti from "canvas-confetti";
import { placeholder }
from '../cuisines/images/images';

export default function PopUp(props) {
    const nameRef = useRef(null);
    const imgRef = useRef(null);
    const boxRef = useRef(null)
    const intervalRef = useRef(null);
    const timeoutRef = useRef(null);

    var myCanvas = document.createElement('canvas');
    var myConfetti = confetti.create(myCanvas, {
        resize: true,
        useWorker: true
    });


    function startModalSequence(resultData) {
        props.ref.current.showModal();

        intervalRef.current = setInterval(() => {
            const randomIdx = Math.floor(Math.random() * cuisines.length);
            imgRef.current.src = cuisines[randomIdx].img;
            nameRef.current.textContent = cuisines[randomIdx].name;
        }, 250);

        timeoutRef.current = setTimeout(() => {
            clearInterval(intervalRef.current);
            playConfetti();
            if (resultData) {
                imgRef.current.src = resultData.img
                const result = `Your choice is ${resultData.name}!`
                nameRef.current.textContent= result
            }
        }, 3000);  
    };

    function playConfetti(){
        myCanvas.style.cssText="position:absolute; width:100%; height:100%; top:0; left: 0; z-index:9999; pointer-events: none;"
        props.ref.current.insertBefore(myCanvas, props.ref.current.firstChild);

        myConfetti({
            particleCount: 1500,
            zIndex: 9999,
        });
    }

    function endConfetti(){
        myConfetti.reset();
        props.ref.current.removeChild(myCanvas)
    }

    function handleClose() {
        clearInterval(intervalRef.current);
        clearTimeout(timeoutRef.current);
        imgRef.current.src = placeholder;
        nameRef.current.textContent = null;
        endConfetti();
        props.ref.current.close();
    };

    return (
        <dialog
            ref={(el) => {
                props.ref.current = el;
                if (el) el.startSequence = startModalSequence;
            }}
            onClose={handleClose}
            className={styles.popupDialog}
        >
            <PopupFoodIcon
                box   = {boxRef}
                name  = {nameRef}
                image = {imgRef}
            />

            <button
                type="button"
                onClick={() =>props.ref.current.close()}
                className={styles.closeBtn}
            >
                Close
            </button>
        </dialog>
    );
};