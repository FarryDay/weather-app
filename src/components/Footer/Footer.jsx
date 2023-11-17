import { useState } from 'react'
import Card from './Card'
import styles from './Footer.module.scss'

export default function Footer() {
	const [cards, setCards] = useState([])
	window.store.subscribe(() => setCards(window.store.getState().forecastDays))
	return (
		<div className={styles.footer}>
			{cards.length !== 0 &&
				cards.map((card, index) => <Card key={index} data={card} />)}
		</div>
	)
}
