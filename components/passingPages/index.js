import styles from "../../styles/Pages.module.css";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { useState, useEffect } from "react";

export default function Pages({ projectsLength, changePage }) {
    const [atualPage, setAtualPage] = useState(1);

    useEffect(() => {
        if (projectsLength > 5) {
            console.log(projectsLength);
        }
    }, [projectsLength]);

    const changePages = (option) => {
        console.log(option);
        if (option === "next" && projectsLength / 5 != atualPage) {
            setAtualPage(atualPage + 1);
        } else if (option === "before" && atualPage != 1) {
            setAtualPage(atualPage - 1);
        }
    };

    changePage(atualPage);

    return (
        <section className={styles.pagesContainer}>
            <section onClick={() => changePages("before")}>
                <MdNavigateBefore />
            </section>
            <section>{atualPage}</section>
            <section onClick={() => changePages("next")}>
                <MdNavigateNext />
            </section>
        </section>
    );
}
