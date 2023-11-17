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

	function onPress(event) {
		if (event.key !== 'Enter') return

		console.log('TODO FETCH API')
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
