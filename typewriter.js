let titles = [
	"Computer Science Graduate",
	"Web Developer",
	"Software Developer",
	"Game Developer",
	"Gamer",
];
let index = 0;
let charIndex = 0;
let isAdding = true;

function updateTitle() {
	let typewriter = document.getElementById("typewriter");
	if (isAdding) {
		if (charIndex >= titles[index].length) {
			isAdding = false;
			setTimeout(updateTitle, 2000); // Wait for 2 seconds before starting deletion
		} else {
			typewriter.textContent = titles[index].substring(0, charIndex + 1);
			charIndex++;
			setTimeout(updateTitle, 100); // Insert characters one by one
		}
	} else {
		if (charIndex == 0) {
			isAdding = true;
			index = (index + 1) % titles.length;
			setTimeout(updateTitle, 500); // Wait for half second before start typing again
		} else {
			typewriter.textContent = titles[index].substring(0, charIndex - 1);
			charIndex--;
			setTimeout(updateTitle, 100); // Delete characters one by one
		}
	}
}

updateTitle();
