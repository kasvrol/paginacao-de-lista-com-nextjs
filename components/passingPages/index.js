import styles from "../../styles/Pages.module.css";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { useState, useEffect } from "react";

export default function Pages({ projectsLength, changePage }) {
    const [atualPage, setAtualPage] = useState(1);
    const [disableavigateBefore, setDisableavigateBefore] = useState(false);
    const [disableavigateNext, setDisableavigateNext] = useState(false);
    const firstPage = 1;
    const lastPage = projectsLength / 5;

    useEffect(() => {
        if (atualPage === firstPage) {
            setDisableavigateBefore(true);
        } else if (atualPage === lastPage) {
            setDisableavigateNext(true);
        }
    }, [atualPage]);

    const changePages = (option) => {
        if (option === "next" && atualPage !== lastPage) {
            setAtualPage(atualPage + 1);
        } else if (option === "before" && atualPage !== firstPage) {
            setAtualPage(atualPage - 1);
        }
    };

    changePage(atualPage);

    return (
        <section className={styles.pagesContainer}>
            {disableavigateBefore ? (
                <></>
            ) : (
                <section onClick={() => changePages("before")}>
                    <MdNavigateBefore />
                </section>
            )}
            <section>{atualPage}</section>
            {disableavigateNext ? (
                <></>
            ) : (
                <section onClick={() => changePages("next")}>
                    <MdNavigateNext />
                </section>
            )}
        </section>
    );
}
