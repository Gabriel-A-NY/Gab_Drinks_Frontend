import { useState } from "react";
import Header from "../pages/elements/Header.tsx";
import { Typography } from "@material-ui/core";
import DrinkService, {DrinkParam} from "../../service/DrinkService.ts";

function AddDrink() {
    const [drink, setDrink] = useState<DrinkParam>({
        id: 0,
        product_name: "",
        price: 0,
        description: "",
        image_link: ""
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setDrink(prevDrink => ({
            ...prevDrink,
            [name]: name === "id" || name === "price" ? Number(value) : value,
        }));
    };

    const isEmptyValue = Object.values(drink).some(value => value === "" || value === null);

    async function handleAddDrink() {
        try {
            if (isEmptyValue || isNaN(drink.price) || isNaN(drink.id)) {
                alert("Please fill in all fields correctly.");
                return;
            }

            await DrinkService.createDrink(drink);
            alert("Drink added successfully!");
        } catch (error) {
            console.error(error);
            alert("An error occurred while adding the drink.");
        }
    }

    return (
        <div className="dashboard-background">
            <Header />
            <Typography variant="h1" gutterBottom>
                Add a New Drink
            </Typography>
            <div>
                <input
                    type="text"
                    name="product_name"
                    value={drink.product_name}
                    onChange={handleInputChange}
                    placeholder="Drink Name"
                />
                <input
                    type="number"
                    name="id"
                    value={drink.id}
                    onChange={handleInputChange}
                    placeholder="Drink ID"
                />
                <input
                    type="number"
                    name="price"
                    value={drink.price}
                    onChange={handleInputChange}
                    placeholder="Drink Price"
                />
                <input
                    type="text"
                    name="description"
                    value={drink.description}
                    onChange={handleInputChange}
                    placeholder="Drink Description"
                />
                <input
                    type="text"
                    name="image_link"
                    value={drink.image_link}
                    onChange={handleInputChange}
                    placeholder="Drink Image URL"
                />
                <button onClick={handleAddDrink}>Add Drink</button>
            </div>
        </div>
    );
}

export default AddDrink;
