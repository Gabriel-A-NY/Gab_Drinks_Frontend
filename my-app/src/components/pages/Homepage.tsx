import Header from "./elements/Header.tsx";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import {useEffect, useState} from "react";
import DrinkService from "../../service/DrinkService.ts";
import Typography from '@mui/material/Typography';
import {DrinkProps} from "../../DrinkProps.ts";

function Homepage() {
    const [drinks, setDrinks] = useState<DrinkProps[]>([]);

    useEffect(() => {
        DrinkService
            .getDrinks()
            .then((response) => {
                console.log(response);
                if (response) {
                    setDrinks(response);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <>
            <Header/>
            <Grid container spacing={2}>
                {drinks.map((drink: DrinkProps) => (
                    <Grid item xs={12} sm={6} md={4} key={drink.product_id}>
                        <Card sx={{maxWidth: 345}}>
                            <CardMedia
                                sx={{height: 140}}
                                image={drink.image_link}
                                title={drink.product_name || "Unnamed Drink"}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {drink.product_name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {drink.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    );
}

export default Homepage;
