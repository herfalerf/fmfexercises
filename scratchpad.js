function vowelCount(str) {
	//             'elie'
	let splitArr = str.split('');
	//            'elie'.split("");
	// splitArr = [e,l,i,e]
	let obj = {};
	const vowels = 'aeiou';

	splitArr.forEach(function(letter) {
		// [e,l,i,e].forEach(function(letter){
		let lowerCasedLetter = letter.toLowerCase();
		if (vowels.indexOf(lowerCasedLetter) !== -1) {
			// if ("aeiou".indexOf(e) !== -1) {
			// IF THIS OBJECT ALREADY EXISTS
			if (obj[lowerCasedLetter]) {
				//INCREASE ITS VALUE BY 1
				obj[lowerCasedLetter]++;
				//    IF OBJECT DOES NOT EXIST SET IT'S VALUE TO 1
			}
			else {
				obj[lowerCasedLetter] = 1;
			}
		}
	});
	return obj;
}

//   expect(vowelCount('elie')).toEqual({ e: 2, i: 1 });
