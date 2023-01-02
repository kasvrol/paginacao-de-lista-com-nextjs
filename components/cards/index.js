import { useState, useEffect } from "react";
import styles from "../../styles/Cards.module.css";

export default function Cards({ qtdProjects, projectsPage }) {
    const reposGitHubAPI = "https://api.github.com/users/kasvrol/repos";
    const [projects, setProjects] = useState();
    const [projectsLength, setProjectsLength] = useState(0);
    const [showProjects, setShowProjects] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await fetch(reposGitHubAPI);
            const data = await response.json();
            setProjects(data);
            setProjectsLength(data.length)
        })();
    }, []);

    useEffect(() => {
        if (projects) {
            () => {
                let projectsArray = []
                let oneProject = projectsPage * 5 - 5;
                let totalPages = projectsPage * 5;
                for (let index = 0; index < totalPages; index++) {
                    if (oneProject <= index) {
                        projectsArray.push(projects[index]);
                    }
                }
                return setShowProjects(projectsArray);
            }
        }
    }, [projectsPage]);

    console.log('projects', projects)
    console.log('showProjects', showProjects)
    console.log('projectsLength', projectsLength)

    function icon(language) {
        switch (language) {
            case "HTML":
                return "./1.png";
            case "CSS":
                return "./2.png";
            case "JavaScript":
                return "./3.png";
            case "Java":
                return "./4.png";
            default:
                return "./5.png";
        }
    }

    const formatDate = (date) => {
        const formatDate = new Date(date);
        const day = formatDate.getDay();
        const month = formatDate.getMonth();
        const year = formatDate.getFullYear();
        return `${day}/${month}/${year}`;
    };

    const existProjects = () => {
        return (<>
            {showProjects.map((element) => (
                <ul key={element.id} className={styles.CardContainer}>
                    <li>
                        <img
                            src={icon(element.language)}
                            alt="Icone de registro"
                        />
                    </li>
                    <li>{element.name}</li>
                    <li>{element.language} </li>
                    <li>{formatDate(element.updated_at)}</li>
                    <li>{element.id}</li>
                    <li>{element.size}</li>
                </ul>
            ))}</>)
    };

    const dontExistProjects = () => {
        return (
            <section className={styles.NoCardsList}>
                <p>Não existe repositório listado</p>
            </section>)
    };

    const containerProjects = () => {
        qtdProjects(projectsLength);
        return (
            <section className={styles.CardsList}>
                <ul className={styles.CardInformation}>
                    <li>Nome</li>
                    <li>Linguagem</li>
                    <li>Última modificação</li>
                    <li>Id</li>
                    <li>Tamanho</li>
                </ul>
                {showProjects.length === 0 ? dontExistProjects() : existProjects()}
            </section>)
    };

    return containerProjects();
}
