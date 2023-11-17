import React from 'react'
import styles from './Main.module.scss'
export default function Main() {
	return (
			<>
				<div className={styles.weather}>
						<div className={styles.generaly}></div>
						<div className={styles.secondary}></div>
				</div>
			</>
	)
}
