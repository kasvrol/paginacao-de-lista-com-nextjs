import styles from "../../styles/Pages.module.css";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { useState, useEffect } from "react";

export default function Pages({ projectsLength, changePage, indexPage }) {
    const [disableNavigateBefore, setDisableNavigateBefore] = useState(false);
    const [disableNavigateNext, setDisableNavigateNext] = useState(false);
    const firstPage = 1;
    const lastPage = projectsLength / 5;

    useEffect(() => {
        switch (indexPage) {
            case firstPage:
                return setDisableNavigateBefore(true);
            case lastPage:
                return setDisableNavigateNext(true);
            default:
                setDisableNavigateBefore(true);
                setDisableNavigateNext(false);
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

    return (
        <>{projectsLength ? <section className={styles.pagesContainer}>
            {disableNavigateBefore ? (
                <></>
            ) : (
                <section onClick={() => changePages("before")}>
                    <MdNavigateBefore />
                </section>
            )}
            <section>{indexPage}</section>
            {disableNavigateNext ? (
                <></>
            ) : (
                <section onClick={() => changePages("next")}>
                    <MdNavigateNext />
                </section>
            )}
        </section> : <></>}</>

    );
}
