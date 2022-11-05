import Head from 'next/head';
import Image from 'next/image';
import { ProjectData } from '../components';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Dynamic Next/Previous Buttons</title>
				<meta
					name="description"
					content="Dynamic Next/Previous buttons in NextJs."
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<h1 className={styles.h1}>Dynamic Next/Previous Buttons</h1>
			<main className={styles.main}>
				<ProjectData />
			</main>

			<footer className={styles.footer}>
				<p>
					&copy;{new Date().getFullYear()}
					<a
						href="https://github.com/hesbon-osoro"
						target="_blank"
						rel="noopener noreferrer"
					>
						<span className={styles.logo}>
							<Image
								src="/github.png"
								alt="GitHub Logo"
								width={50}
								height={50}
							/>
						</span>
					</a>{' '}
					wazimu
				</p>
			</footer>
		</div>
	);
}
