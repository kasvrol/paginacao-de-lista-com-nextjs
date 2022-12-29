import styles from "../../styles/Menu.module.css";

export default function Menu() {
    const menuOptions = () => {
        let arrayOption = [];
        for (let index = 1; index < 10; index++) {
            arrayOption.push(<li>Opção {index}</li>);
        }

        return arrayOption;
    };
    return (
        <section className={styles.menuContainer}>
            <h1 className={styles.menuTitle}>Menu</h1>
            <ul className={styles.Options}>{menuOptions()}</ul>
        </section>
    );
}
