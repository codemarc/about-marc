// jshint laxcomma:true, esnext:true, -W014

(async () => {

	let getAGr8Dog = () => {
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
			"Hands": {
				"On": "Often",
				"In": "Always"
			}
		};
		return codemarc;
	};

	let letsTalk = await getAGr8Dog();
	console.log(letsTalk);
	console.log(require('os').EOL);
	letsTalk.data.forEach( domain => console.log(`${domain}\tCall Marc at ${letsTalk.phone}`));
	console.log(require('os').EOL);

})();