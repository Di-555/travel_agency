export const formatDate = (date?: Date | null) => {
	if (date) {
		const asd = new Date(date.toString())
		return ('0' + asd.getDate()).slice(-2) + '.' + ('0' + (asd.getMonth() + 1)).slice(-2)
	}
}