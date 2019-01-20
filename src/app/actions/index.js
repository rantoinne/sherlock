export const dataSet=(recievedItem)=> {
	return {
		type: 'SET',
		payload: recievedItem
	};
}

export const dataSetter=(recievedItem)=> {
	return {
		type: 'EMAIL',
		payload: recievedItem
	};
}