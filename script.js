const openai = new OpenAI "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";

function generateAnswer(event) {
	event.preventDefault();
	const question = event.target.elements.question.value;
	const prompt = `Question: ${question}\nAnswer:`;
	const parameters = {
		prompt: prompt,
		temperature: 0.7,
		max_tokens: 60,
		n: 1,
		stop: '\n',
	};
	openai.complete('text-davinci-002', parameters)
		.then((response) => {
			const answer = response.choices[0].text.trim();
			document.getElementById('answer').innerHTML = answer;
		})
		.catch((error) => {
			console.log(error);
		});
}

document.addEventListener('DOMContentLoaded', () => {
	const form = document.querySelector('form');
	form.addEventListener('submit', generateAnswer);
});
