import { createStore } from 'redux'

let weatherState = {
	temp: 0,
	location: '',
	humidity: 0,
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
const store = createStore((state = weatherState, action) => {
	switch (action.type) {
		case 'SET_WEATHER': {
			let { temp } = action.data
			return { ...state, temp }
		}
		default:
			return state
	}
})

export const setWeather = () => ({ type: 'SET_WEATHER' })

window.store = store
export default store
