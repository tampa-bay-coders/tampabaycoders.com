import Image from "next/image";
import styles from "../page.module.css";

export default function Contact() {
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
                <h1 className={styles.title}>Contact Us</h1>
                <ul>
                    <li>Contact form coming soon</li>
                </ul>
            </main>
            <footer className={styles.footer}>
                <Link href="/">Home</Link>
            </footer>
        </div>
    )
}