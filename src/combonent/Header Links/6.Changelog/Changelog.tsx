import styles from './Changelog.module.css';
import DropdownMenu from './Dropdown Menu/DropdownMenu';

const CHANGELOG_DATA = [
    { id: "svg-path", date: "Jun 16, 2026", title: "SVG Path Morphing", img: "https://assets.aceternity.com/labs/svg-path-morphing.webp" },
    { id: "gooey-dropdown", date: "Jun 15, 2026", title: "Gooey Dropdown", img: "https://assets.aceternity.com/labs/aave-dropdown.webp" },
    { id: "fey-cards", date: "Jun 13, 2026", title: "Fey Cards", img: "https://assets.aceternity.com/components/fey-cards.webp" },
    { id: "labs", date: "Jun 11, 2026", title: "Labs", img: "https://assets.aceternity.com/components/wispr-flow-text-animation-2.webp" },
    { id: "notch", date: "Jun 3, 2026", title: "Notch", img: "https://assets.aceternity.com/components/notch.webp" },
];

export default function Changelog() {
    return (
        <div className={styles.changelogContainer}>
            <aside className={styles.sidebar}>
                <DropdownMenu />
            </aside>
            
            <main className={styles.mainContent}>
                <header className={styles.header}>
                    <h1>Changelog</h1>
                    <p>Updates, additions and improvements to Aceternity UI.</p>
                </header>

                <div className={styles.timeline}>
                    {CHANGELOG_DATA.map((item) => (
                        <article key={item.id} id={item.id} className={styles.entry}>
                            <div className={styles.marker} />
                            <div className={styles.content}>
                                <span className={styles.date}>{item.date}</span>
                                <h2>{item.title}</h2>
                                <div className={styles.previewBox}>
                                    <img src={item.img} alt={item.title} loading="lazy" />
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </main>
        </div>
    );
}