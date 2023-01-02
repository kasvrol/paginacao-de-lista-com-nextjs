import Head from "next/head";
import Cards from "../components/cards";
import Header from "../components/header";
import Menu from "../components/menu";
import Pages from "../components/passingPages";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";

export default function Home() {
    const [projects, setProjects] = useState();
    const [projectsLength, setProjectsLength] = useState(0);
    const [showPage, setShowPage] = useState(false);
    const [page, setPage] = useState(1);
    const reposGitHubAPI = "https://api.github.com/users/kasvrol/repos";

    useEffect(() => {
        (async () => {
            const response = await fetch(reposGitHubAPI);
            const data = await response.json();
            setProjects(data);
            setProjectsLength(data.length)
        })();

        if (5 < projectsLength) {
            setShowPage(true)
        }
    }, []);

    const changePage = (page) => {
        setPage(page);
    };

    console.log(projectsLength)

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
                <Cards projectsPage={page} projects={projects} />
            </main>
            <footer className={styles.footer}>
                {showPage ? <Pages projectsLength={projectsLength} changePage={changePage} indexPage={page} /> : <></>}
            </footer>
        </>
    );
}
