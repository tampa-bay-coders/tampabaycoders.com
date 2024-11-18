import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <Image
                    className={styles.logo}
                    src="/logo-260-transparent.png"
                    alt="Company Logo"
                    width={260}
                    height={260}
                    priority
                />
                <h1 className={styles.title}>Tampa Bay Coders</h1>
                <ul>
                    <li>Custom software development</li>
                    <li>Managed SaaS hosting</li>
                </ul>
                <div className={styles.ctas}>
                    <a className={styles.primary} href="/contact">Contact Us</a>
                    <a
                        href="/projects"
                        className={styles.secondary}
                    >
                        Projects
                    </a>
                </div>
            </main>
            <footer className={styles.footer}>
                <a
                    href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/pickaxe-logo.svg"
                        alt="File icon"
                        width={16}
                        height={16}
                    />
                    Checkout pickaxe.media
                </a>
            </footer>
        </div>
    );
}
