import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
	return (
		<>
			<header className={styles.header}>
				<h1>Mealano</h1>
				<HeaderCartButton />
			</header>
			<div className={styles["main-image"]}>
				<img
					src="https://images.unsplash.com/photo-1576866209830-589e1bfbaa4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format"
					alt="a table full of delicious food"
				/>
			</div>
		</>
	);
};

export default Header;
