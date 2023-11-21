import moment from 'moment'
import 'moment/locale/ru'
import React from 'react'
import getDayOfWeek from '../../utils/getDayOfWeek'
import styles from './Footer.module.scss'

export default function Card({ data }) {
	console.log(data)
	const date = new Date(data.date)
	return (
		<div className={styles.card}>
			<img src={data.day.condition.icon} alt={data.day.condition.text} />
			<p style={{ color: 'white', fontWeight: 700 }}>
				{moment(date).format('DD.MM')}
			</p>
			<h1 style={{ color: 'white', fontSize: 24, fontWeight: 100 }}>
				{getDayOfWeek(date.getDay())}
			</h1>
			<h2 style={{ color: 'white' }}>{data.day.avgtemp_c} °С</h2>
		</div>
	)
}
