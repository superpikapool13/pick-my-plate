import { useState } from 'react'
import styles from './assets/App.module.css'
import { cuisines } from './components/cuisines/cuisines'
import Header from './components/header/Header'
import FoodIcon from './components/foodIcon/foodIcon'

export default function App() {

    return (
        <>
            <Header title="Hello" />

            {cuisines.map((cuisine) => (
                <FoodIcon
                    name={cuisine.name}
                    image={cuisine.img}
                />
            ))}
        </>
    )
}