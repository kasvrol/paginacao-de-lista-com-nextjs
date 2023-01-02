import { useState, useEffect } from "react";
import styles from "../../styles/Header.module.css";
import { AiFillBell } from "react-icons/ai";
import { HiOutlineSearch, HiUsers } from "react-icons/hi";
import { env } from "../../next.config";

export default function Header() {
    const [img, setImg] = useState("./1.png");

    useEffect(() => {
        (async () => {
            const response = await fetch(env.profileGithubAPI);
            const data = await response.json();
            setImg(data);
        })();
    }, []);

    return (
        <section className={styles.headerContainer}>
            <section>
                <img
                    src="./cube.png"
                    alt="Icon da empresa"
                    className={styles.icon}
                />
            </section>
            <ul className={styles.InformationList}>
                <li>
                    <HiUsers />
                </li>
                <li>
                    <HiOutlineSearch />
                </li>
                <li>
                    <AiFillBell />
                </li>
                <li>
                    {" "}
                    <img
                        src={img.avatar_url}
                        alt="Usuário atual"
                        className={styles.icon}
                    />
                </li>
            </ul>
        </section>
    );
}
