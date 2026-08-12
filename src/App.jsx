import { useState } from 'react'
import styles from './assets/App.module.css'
import Header from './components/header/Header'
import FoodIconList from './components/foodIconList'
import Description from './components/description/description'

export default function App() {

    return (
        <>
            <Header title="Pick My Plate!" />

            <Description />

            <FoodIconList />
        </>
    )
}