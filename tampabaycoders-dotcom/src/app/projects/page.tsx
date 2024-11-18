import Image from "next/image";
import Link from 'next/link';
import styles from "../page.module.css";

export default function Projects() {
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
                <h1 className={styles.title}>Our Recent Projects</h1>
                <div className={styles.ctas}>
                    <a
                        href="https://pickaxe.media"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.secondary}
                    >
                        <Image
                            aria-hidden
                            src="/pickaxe-logo.svg"
                            alt="File icon"
                            width={16}
                            height={16}
                        />
                        Pickaxe.Media
                    </a>
                </div>
            </main>
            <footer className={styles.footer}>
                <Link href="/">Home</Link>
            </footer>
        </div>
    )
}