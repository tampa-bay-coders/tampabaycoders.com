import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link';

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
                    <li>Software Development & Engineering</li>
                    <li>Cloud Solutions</li>
                    <li>Cybersecurity</li>
                    <li>Data & Analytics</li>
                    <li>Technology Advisory</li>
                    <li>Project Management</li>
                    <li>Business Analysis</li>
                    <li>UI/UX Design</li>
                    <li>Automation</li>
                    <li>Industry-Specific Solutions</li>
                    <li>System Integration</li>
                    <li>Training and Support</li>
                </ul>
                <div className={styles.ctas}>
                    <Link className={styles.primary} href="/contact">Contact Us</Link>
                    <Link
                        href="/projects"
                        className={styles.secondary}
                    >
                        Projects
                    </Link>
                </div>
            </main>
            <footer className={styles.footer}>
                <a
                    href="https://pickaxe.media"
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
