export interface DrinkProps {
    product_id: number;
    price: number;
    description: string;
    image_link: string;
    product_name: string;
}

export interface Drinks {
    drink: DrinkProps[];
}