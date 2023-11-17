import React from 'react'
import styles from './Main.module.scss'
import CloudRoundedIcon from '@mui/icons-material/CloudRounded'
import styled from '@emotion/styled'
import { colors } from '@mui/material'

const Clock = () =>{
	const clock = new Date()
	const time = clock.getHours() + ':' + clock.getMinutes()
	return <h1 className={styles.clock}>{time}</h1>
}
export default function Main() {
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
