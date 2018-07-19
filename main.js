$(document).ready(function() {
	// Here are the 100 most popular words in English, as totally stolen from here: 
	// https://gist.github.com/gravitymonkey/2406023
	var commonWords = [
	  "the","of","and","a","to","in","is","you","that","it","he",
	  "was","for","on","are","as","with","his","they","I","at","be",
	  "this","have","from","or","one","had","by","word","but","not",
	  "what","all","were","we","when","your","can","said","there",
	  "use","an","each","which","she","do","how","their","if","will",
	  "up","other","about","out","many","then","them","these","so",
	  "some","her","would","make","like","him","into","time","has",
	  "look","two","more","write","go","see","number","no","way",
	  "could","people","my","than","first","water","been","call",
	  "who","oil","its","now","find","long","down","day","did","get",
	  "come","made","may","part"
	];

	var words = []
	for (let i = 0; i < commonWords.length; i++) {
		if (commonWords[i].length >= 3) {
			words.push(commonWords[i])
		}
	}

	var word = words[Math.floor(Math.random() * words.length)]

	var answer = ''
	for (let i = 0; i < word.length; i++) {
		answer += '_'
	}

	var turns = 8

	$('#answer').html(answer)
	$('#turns').html('Turns: ' + turns)

	$("#guess").on('click', function(char) {
		var char = $("#char").val()
		char = char.toLowerCase()

		for (let i = 0; i < answer.length; i++) {
			if (word.charAt(i) === char) {
				wordArr = answer.split('')
				wordArr[i] = char
				answer = wordArr.join('')
			}
		}

		turns--

		var result = ''

		if (turns >= 0 && answer == word) {
			result = 'You won!'
		} else if (turns > 0 && answer !== word) {
			result = 'Guess again...'
		} else {
			result = 'You lost. The word is ' + word + '.'
		}

		$('#answer').html(answer)
		$('#turns').html('Turns: ' + turns)
		$('#result').html(result)
	})
})