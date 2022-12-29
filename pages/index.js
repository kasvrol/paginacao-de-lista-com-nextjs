import Head from "next/head";
import Cards from "../components/cards";
import Header from "../components/header";
import Menu from "../components/menu";
import Pages from "../components/pagess";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";

export default function Home() {
    const [page, setPage] = useState(1);
    const [item, setItem] = useState(0);

    const qtdProjects = (qtd) => {
        setItem(qtd);
    };

    const changePage = (page) => {
        setPage(page);
    };

    return (
        <>
            <Head>
                <title>Processo Seletivo</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/cube.png" />
            </Head>
            <Header />
            <main className={styles.main}>
                <Menu />
                <Cards qtdProjects={qtdProjects} projectsPage={page} />
            </main>
            <footer className={styles.footer}>
                <Pages qtdProjects={item} changePage={changePage} />
            </footer>
        </>
    );
}
