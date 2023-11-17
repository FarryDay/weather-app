import CloudRoundedIcon from '@mui/icons-material/CloudRounded'
import React, { useEffect, useState } from 'react'
import styles from './Main.module.scss'

export default function Main() {
	const [time, setTime] = useState('00:00')

	useEffect(() => {
		setTime(`${moment().format('hh:mm')}`)

		setInterval(() => {
			setTime(`${moment().format('hh:mm')}`)
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
						<h1 className={styles.clock}></h1>
					</div>
				</div>
				<div className={styles.secondary}></div>
			</div>
		</>
	)
}
