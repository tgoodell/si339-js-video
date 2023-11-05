var video = document.getElementById("player1");;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 0.9
	console.log(video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate / 0.9
	console.log(video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime = video.currentTime + 10;
	console.log(video.ended)
	// video.onended = function() {
	// 	video.currentTime = 0
	// 	video.play();
	// }
});



document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute Video");
	video.muted = true;
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Old School Video");
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Original Video");
});