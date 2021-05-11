// jshint esversion:6

const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

const stopsound = () => {
	sounds.forEach((sound) => {
		const songs = document.getElementById(sound);
		songs.pause();
		songs.currentTime = 0;
	});
};

sounds.forEach((sound) => {
	const btn = document.createElement('button');
	btn.classList.add('btn');
	btn.innerText = sound;

	btn.addEventListener('click', () => {
		stopsound();

		document.getElementById(sound).play();
	});

	document.querySelector('.buttons').appendChild(btn);
});
