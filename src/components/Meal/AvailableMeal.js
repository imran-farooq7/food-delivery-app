import Card from "../UI/Card";
import styles from "./AvailableMeal.module.css";
import MealItem from "./MealItem/MealItem";
const DUMMY_MEALS = [
	{
		id: "m1",
		name: "Sushi",
		description: "Finest fish and veggies",
		price: 22.99,
	},
	{
		id: "m2",
		name: "Schnitzel",
		description: "A german specialty!",
		price: 16.5,
	},
	{
		id: "m3",
		name: "Barbecue Burger",
		description: "American, raw, meaty",
		price: 12.99,
	},
	{
		id: "m4",
		name: "Green Bowl",
		description: "Healthy...and green...",
		price: 18.99,
	},
];
const AvailableMeal = () => {
	const mealsList = DUMMY_MEALS.map((meal) => {
		return (
			<MealItem
				name={meal.name}
				price={meal.price}
				description={meal.description}
				key={meal.id}
			/>
		);
	});
	return (
		<section className={styles.meals}>
			<Card>
				<ul>{mealsList}</ul>
			</Card>
		</section>
	);
};
export default AvailableMeal;
