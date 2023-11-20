import React from 'react'
import styles from './Footer.module.scss'

export default function Card({ data }) {
	return (
		<div className={styles.card}>
			<img src={data.day.condition.icon} alt={data.day.condition.text} />
			<h2 style={{ color: 'white' }}>{data.day.avgtemp_c}</h2>
		</div>
	)
}
