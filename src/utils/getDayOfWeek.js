export default function getDayOfWeek(day) {
	return day == 1
		? 'Понедельник'
		: day == 2
		? 'Вторник'
		: day == 3
		? 'Среда'
		: day == 4
		? 'Четверг'
		: day == 5
		? 'Пятница'
		: day == 6
		? 'Суббота'
		: day == 7
		? 'Воскресенье'
		: 'Ошибка'
}
