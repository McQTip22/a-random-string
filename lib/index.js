function generate() {
	let alphabet = array(65, 90).concat(array(97, 122)).concat(array(48, 57)).concat(array(97, 122));
	var alphabetItems = [];
	for (let i = 0; i < 7; i++) {
		var alphabetItem = alphabet[Math.floor(Math.random() * alphabet.length)];
		alphabetItems.push(String.fromCharCode(alphabetItem));
	}
	return alphabetItems.join('');
}

function array(low, high) {
	var array = [];
	for (let i = low; i <= high; i++) {
		array.push(i);
	}
	return array;
}

module.exports = generate;
