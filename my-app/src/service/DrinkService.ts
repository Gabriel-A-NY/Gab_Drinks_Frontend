import {defaultAxiosInstance} from "./DataFetch.ts";

export type DrinkParam = {
    id: number,
    product_name: string,
    price: number,
    description: string,
    image_link: string
}

const getAuthorizationToken = () => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
        throw new Error("No token found");
    }

    return {
        headers: {
            Authorization: token,
        },
    };
};


const getDrinks = async () => {
    try {
        const response = await defaultAxiosInstance.get(
            "/all"
        )
        console.log(response.data)
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
        const response = await defaultAxiosInstance.delete(`${id}`, getAuthorizationToken())
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
        const response = await defaultAxiosInstance.post("add", data, getAuthorizationToken())
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

        const response = await defaultAxiosInstance.patch(`${DrinkParam.id}`, data, getAuthorizationToken())
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

export default DrinkService;