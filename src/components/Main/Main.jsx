import styled from '@emotion/styled'
import CloudRoundedIcon from '@mui/icons-material/CloudRounded'
import React from 'react'
import styles from './Main.module.scss'

const Clock = () => {
	const clock = new Date()
	const time = clock.getHours() + ':' + clock.getMinutes()
	return <h1>{time}</h1>
}

const WeatheIcon = styled(CloudRoundedIcon)({})

export default function Main() {
	return (
		<>
			<div className={styles.weather}>
				<div className={styles.generaly}>
					<div className={styles.tempature}></div>
					<div className={styles.weatherdisplay}>
						<WeatheIcon sx={{ color: 'white', fontSize: '15rem' }}></WeatheIcon>
						<Clock />
					</div>
				</div>
				<div className={styles.secondary}></div>
			</div>
		</>
	)
}
