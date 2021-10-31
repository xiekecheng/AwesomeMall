const namespace = 'mall'

export function getItem(key,def){
	let storage = JSON.parse(localStorage.getItem(namespace))
	if(!storage){
		return def
	}
	return storage[key]
}

export function setItem(key,value){
	let storage = JSON.parse(localStorage.getItem(namespace))
	if(!storage){
		storage = {}
	}
	console.log('storage',storage);
	storage[key] = value
	console.log('storage',storage);
}