import { Search } from '@mui/icons-material'
import FormControl from '@mui/material/FormControl'
import Input from '@mui/material/Input'
import InputAdornment from '@mui/material/InputAdornment'
import React, { useState } from 'react'

export default function Header() {
	const [value, setValue] = useState('')
	return (
		<div>
			<FormControl variant='standard'>
				<Input
					id='search'
					placeholder='Change city'
					value={value}
					onChange={(e, value) => setValue(() => value)}
					startAdornment={
						<InputAdornment position='start'>
							<Search />
						</InputAdornment>
					}
				/>
			</FormControl>
		</div>
	)
}
