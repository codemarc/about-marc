// jshint laxcomma:true, esnext:true, -W014

(async () => {

	let getAGr8NewDog = () => {
		const codemarc = {
			"name": "Marc J. Greenberg",
			"email": "codemarc@gmail.com",
			"phone": "516-313-4826",
			"data": ["Integration", "Cloud   ", "Architecture", "Passionate", "Articulate", "Evangelist"],
			"strategicInnovation": ["People", "Technology", "Business", "Partnering"],
			"platfom": "agnostic",
			"language": "polyglot",
			"devops": ["Minded", "CI", "CD"],
			"container": "docker run -it -P  codemarc/focused:latest",
			"UiUx": {
				"visual": ["web", "typescript", "less", "bootstrap", "jquery"],
				"voice": ["Alexa Skills", "Amazon Voice Services"]
			},
			"Hands": {
				"On": "Often",
				"In": "Always"
			}
		};
		return codemarc;
	};

	let letsTalk = await getAGr8NewDog();
	console.log(letsTalk);
	console.log(require('os').EOL);
	letsTalk.data.forEach( domain => console.log(`${domain}\tCall Marc at ${letsTalk.phone}`));
	console.log(require('os').EOL);

})();