import CloudRoundedIcon from '@mui/icons-material/CloudRounded'
import React, { useEffect, useState } from 'react'
import styles from './Main.module.scss'

export default function Main() {
	const [time, setTime] = useState('00:00')

	useEffect(() => {
		const date = new Date()
		setTime(`${date.getHours()}:${date.getMinutes()}`)

		setInterval(() => {
			const date = new Date()
			setTime(`${date.getHours()}:${date.getMinutes()}`)
		}, 5000)
	}, [])

	return (
		<>
			<div className={styles.weather}>
				<div className={styles.generaly}>
					<div className={styles.tempature}></div>
					<div className={styles.weatherdisplay}>
						<CloudRoundedIcon
							sx={{ color: 'white', fontSize: '15rem' }}
						></CloudRoundedIcon>
						<h1>{time}</h1>
					</div>
				</div>
				<div className={styles.secondary}></div>
			</div>
		</>
	)
}
