import {useEffect, useState} from "react";
import type {DrinkProps} from "../DrinkProps.ts";
import DrinkService from "./DrinkService.ts";

const useDrink = () => {
    const [drinks, setDrinks] = useState<DrinkProps[]>([]);

    useEffect(() => {
        DrinkService.getDrinks().then((data) => {
            setDrinks(data);
            data.forEach((drink: { drinkName: any; }) => console.log(drink.drinkName));
        })
    })
}