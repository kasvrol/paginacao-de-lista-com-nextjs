import Head from "next/head";
import Cards from "../components/cards";
import Header from "../components/header";
import Menu from "../components/menu";
import Pages from "../components/passingPages";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import { env } from "../next.config";

export default function Home() {
    const [projects, setProjects] = useState();
    const [projectsLength, setProjectsLength] = useState(0);
    const [page, setPage] = useState(1);

    useEffect(() => {
        (async () => {
            const response = await fetch(env.reposGithubAPI);
            const data = await response.json();
            setProjects(data);
            setProjectsLength(data.length)
        })();
    }, []);

    const changePage = (page) => {
        setPage(page);
    };

    return (
        <>
            <Head>
                <title>Lista de repositórios</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/cube.png" />
            </Head>
            <Header />
            <main className={styles.main}>
                <Menu />
                <Cards projectsPage={page} projects={projects} />
            </main>
            <footer className={styles.footer}>
                <Pages projectsLength={projectsLength} changePage={changePage} indexPage={page} />
            </footer>
        </>
    );
}
