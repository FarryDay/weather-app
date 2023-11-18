import CloudRoundedIcon from '@mui/icons-material/CloudRounded'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import styles from './Main.module.scss'

export default function Main() {
	const [time, setTime] = useState('00:00')
	const [date, setDate] = useState('')
	const [weatherData, setWeatherData] = useState({})

	window.store.subscribe(() => setWeatherData(window.store.getState()))
	
	useEffect(() => {
		setTime(`${moment().format('hh:mm a')}`)
		setDate(`${moment().format(' - YY.MM.DD')}`)
		setInterval(() => {
			setDate(`${moment().format(' - YY.MM.DD')}`)
			setTime(`${moment().format('hh:mm a')}`)
		}, 5000)
	}, [])

	return (
		<>
			<div className={styles.weather}>
				<div className={styles.generaly}>
					<div className={styles.tempature}>
						<h3>{weatherData.temp}</h3>
						<h4>{weatherData.location}</h4>
						<p className={styles.date}>{date}</p>
					</div>
					<div className={styles.weatherdisplay}>
						<CloudRoundedIcon
							sx={{ color: 'white', fontSize: '15rem' }}></CloudRoundedIcon>
						<h1 className={styles.clock}>{time}</h1>
					</div>
				</div>
				<div className={styles.secondary}>
					<div className={styles.secondaryindicators}>
						<h3>Влажность:<p>{weatherData.humidity}</p></h3>
						<h3>Давление:<p>{weatherData.pressure}</p></h3>
						<h3>Ветер:<p>{weatherData.wind}</p></h3>
					</div>
					<div className={styles.secondaryinfo}>
						<h1>info</h1>
					</div>
				</div>
			</div>
		</>
	)
}
