import styles from "../../styles/Pages.module.css";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { useState, useEffect } from "react";

export default function Pages({ projectsLength, changePage, indexPage }) {
    const [disableNavigateBefore, setDisableNavigateBefore] = useState(true);
    const [disableNavigateNext, setDisableNavigateNext] = useState(true);
    const firstPage = 1;
    const lastPage = projectsLength / 5;

    useEffect(() => {
        switch (indexPage) {
            case firstPage:
                return setDisableNavigateBefore(false);
            case lastPage:
                return setDisableNavigateNext(false);
            default:
                setDisableNavigateBefore(true);
                setDisableNavigateNext(true);
                break;
        }
    }, [indexPage, projectsLength]);

    const changePages = (option) => {
        if (option === "next" && indexPage !== lastPage) {
            changePage(indexPage + 1);
        } else if (option === "before" && indexPage !== firstPage) {
            changePage(indexPage - 1);
        }
    };

    const beforePage = () => {
        if (disableNavigateBefore) {
            return (
                <section onClick={() => changePages("before")}>
                    <MdNavigateBefore />
                </section>
            );
        }
    };

    const nextPage = () => {
        if (disableNavigateNext) {
            return (
                <section onClick={() => changePages("next")}>
                    <MdNavigateNext />
                </section>
            );
        }
    };

    return (
        <>
            {projectsLength ? (
                <section className={styles.pagesContainer}>
                    {beforePage()}
                    <section>{indexPage}</section>
                    {nextPage()}
                </section>
            ) : (
                <></>
            )}
        </>
    );
}
