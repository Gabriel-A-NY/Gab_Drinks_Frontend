import {defaultAxiosInstance} from "./DataFetch.ts";

type DrinkParam = {
    drinkId: number,
    drinkName: string,
    price: number,
    description: string,
    imageUrl: string,
}


const getDrinks = async () => {
    try {
        const response = await defaultAxiosInstance.get(
            "all"
        )
        console.log(response)
        return response.data;
    } catch (error) {
        console.log(error)
    }
}

const getDrinksById = async (id: number) => {
    try {
        const response = await defaultAxiosInstance.get(`${id}`)
        return response.data;
    } catch (error) {
        console.log(error)
    }
}

const deleteDrink = async (id: number) => {
    try {
        const response = await defaultAxiosInstance.delete(`${id}`)
        return response.data;
    } catch (error) {
        console.log(error)
    }
}

async function createDrink(DrinkParam: DrinkParam) {
    try {
        const data = {
            DrinkParam: DrinkParam
        }
        const response = await defaultAxiosInstance.post(`add`, data)
        return response.data
    } catch (error) {
        alert(error)
    }
}

async function updateDrink(DrinkParam: DrinkParam) {
    try {
        const data = {
            DrinkParam: DrinkParam
        }

        const response = await defaultAxiosInstance.patch(`${DrinkParam.drinkId}`, data)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

const DrinkService = {
    getDrinks,
    getDrinksById,
    deleteDrink,
    createDrink,
    updateDrink,
}

export default DrinkService