import moment from 'moment'
import 'moment/locale/ru'
import React, { useEffect, useState } from 'react'
import styles from './Main.module.scss'
export default function Main() {
	const [time, setTime] = useState('00:00')
	const [date, setDate] = useState('')
	const [weatherData, setWeatherData] = useState({})

	window.store.subscribe(() => setWeatherData(window.store.getState()))

	useEffect(() => {
		setTime(`${moment().format('hh:mm a')}`)
		setDate(`${moment().format(' dddd - YY.MM.DD')}`)
		setInterval(() => {
			setDate(`${moment().format(' dddd - YY.MM.DD')}`)
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
						<div className={styles.condition}>
							<img
								src={weatherData.condition?.icon}
								width='128px'
								alt={weatherData.condition?.text}
							/>
							<h2 className={styles.conditionText}>
								{weatherData.condition?.text}
							</h2>
						</div>
						<h1 className={styles.clock}>{time}</h1>
					</div>
				</div>
				<div className={styles.secondary}>
					<div className={styles.secondaryindicators}>
						<h3>
							Влажность:<p>{weatherData.humidity}</p>
						</h3>
						<h3>
							Давление:<p>{weatherData.pressure}</p>
						</h3>
						<h3>
							Ветер:<p>{weatherData.wind}</p>
						</h3>
					</div>
					<div className={styles.secondaryinfo}>
						<h1>Информация о погоде</h1>
						{
							<p>
								Тетюши, солнце в этот день будет редко показываться из-за
								облаков. Пойдет дождь, который должен утихнуть к вечеру и
								закончиться к вечеру и всё будет окей не парьтесь всё будет
								хорошо
							</p>
						}
					</div>
				</div>
			</div>
		</>
	)
}
