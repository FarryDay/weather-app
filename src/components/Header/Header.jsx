import styled from '@emotion/styled'
import { Search } from '@mui/icons-material'
import FormControl from '@mui/material/FormControl'
import Input from '@mui/material/Input'
import InputAdornment from '@mui/material/InputAdornment'
import React, { useState } from 'react'

const SearchInput = styled(Input)({
	color: 'white',
	'&.MuiInput-root::after': {
		borderColor: 'white',
	},
})

export default function Header() {
	const [value, setValue] = useState('')

	window.store.dispatch({ type: 'SET_WEATHER', data: { temp: 100 } })
	console.log(window.store.getState())

	async function fetchData() {
		const URL = `http://api.weatherapi.com/v1/forecast.json?key=${
			import.meta.env.VITE_API_KEY
		}&q=${value}&days=7&aqi=yes&alerts=yes`

		const response = await fetch(URL)
		const data = await response.json()
	}

	function onPress(event) {
		if (event.key !== 'Enter') return
		fetchData()
	}
	return (
		<div>
			<FormControl variant='standard'>
				<SearchInput
					id='search'
					placeholder='Change city'
					value={value}
					onChange={e => setValue(e.target.value)}
					startAdornment={
						<InputAdornment position='start'>
							<Search sx={{ color: 'white' }} />
						</InputAdornment>
					}
					onKeyDown={onPress}
				/>
			</FormControl>
		</div>
	)
}
