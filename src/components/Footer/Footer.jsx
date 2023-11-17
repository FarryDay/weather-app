import React from 'react'
import styles from './Footer.module.scss'

export default function Footer() {
	const cardsQty = window.store.getState()
	console.log(cardsQty)
	return <div className={styles.footer}></div>
}
