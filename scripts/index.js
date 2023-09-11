document.addEventListener("DOMContentLoaded", function () {
	console.log("Has the DOM loaded?");
	// This controls the button for the c note.
	// This variable calls the cNote audio element in the HTML.
	const cNote = document.querySelector("#c");
	const cAudio = document.querySelector("#cAudio");

	// This turns our <div id= "c"> into a button that plays our audio file when the box is pressed.
	cNote.addEventListener("mousedown", function () {
		// This is a property that scrubs the audio file back to its start.
		cAudio.currentTime = 0;

		// This plays the audio file.
		cAudio.play();
	});

	// This controls the button for the d note.

	const dNote = document.querySelector("#d");
	const dAudio = document.querySelector("#dAudio");

	dNote.addEventListener("mousedown", function () {
		dAudio.currentTime = 0;
		dAudio.play();
	});

	// This controls the button for the e note.

	const eNote = document.querySelector("#e");
	const eAudio = document.querySelector("#eAudio");
	eNote.addEventListener("mousedown", function () {
		eAudio.currentTime = 0;
		eAudio.play();
	});

	// This controls the button for the f note.

	const fNote = document.querySelector("#f");
	const fAudio = document.querySelector("#fAudio");

	fNote.addEventListener("mousedown", function () {
		fAudio.currentTime = 0;
		fAudio.play();
	});

	// This controls the button for the g note.

	const gNote = document.querySelector("#g");
	const gAudio = document.querySelector("#gAudio");

	gNote.addEventListener("mousedown", function () {
		gAudio.currentTime = 0;
		gAudio.play();
	});

	// This controls the button for the a note.

	const aNote = document.querySelector("#a");
	const aAudio = document.querySelector("#aAudio");

	aNote.addEventListener("mousedown", function () {
		aAudio.currentTime = 0;
		aAudio.play();
	});

	// This controls the button for the b note.

	const bNote = document.querySelector("#b");
	const bAudio = document.querySelector("#bAudio");

	bNote.addEventListener("mousedown", function () {
		bAudio.currentTime = 0;
		bAudio.play();
	});
});
