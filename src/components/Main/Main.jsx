import CloudRoundedIcon from '@mui/icons-material/CloudRounded'
import styled from '@emotion/styled'
import { colors } from '@mui/material'

const Clock = () =>{
	const clock = new Date()
	const time = clock.getHours() + ':' + clock.getMinutes()
	return <h1 className={styles.clock}>{time}PM</h1>
}
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
						<CloudRoundedIcon sx={{ color: 'white', fontSize: '15rem' }}></CloudRoundedIcon>
						<Clock/>
					</div>
				</div>
				<div className={styles.secondary}></div>
			</div>
		</>
	)
}
