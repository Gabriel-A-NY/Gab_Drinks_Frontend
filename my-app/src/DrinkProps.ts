export interface DrinkProps {
    drinkId: number;
    drinkName: string;
    price: number;
    description: string;
    imageUrl: string;
}

export interface Drinks {
    drink: DrinkProps[];
}