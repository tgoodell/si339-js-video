let video = document.getElementById("player1")
let slider = document.getElementById("slider")

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false
	video.loop = false
})

// Play the Video
document.querySelector("#play").addEventListener("click", function() {
	// Update volume info
	slider.value = 100
	document.querySelector("#volume").textContent = slider.value

	// Actually play the video
	video.play()
})

// Pause the Video
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video")
	video.pause()
})

// Decrease the playback speed and log speed to console
document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 0.9
	console.log(video.playbackRate)
})

// Increase playback speed and log speed to console
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate / 0.9
	console.log(video.playbackRate)
})

// Skip by 10 seconds, log time to console, and loop around when at end
document.querySelector("#skip").addEventListener("click", function() {
	// Start video from start if video has ended
	if (video.currentTime == video.duration) {
		video.currentTime = 0
		video.play()
	}
	// Otherwise, just skip ahead by 10 seconds
	else {
		video.currentTime = video.currentTime + 10
	}
	
	// Either way, print the currentTime
	console.log(video.currentTime)
})

// Mute/Unmute the Video
document.querySelector("#mute").addEventListener("click", function() {
	// If muted, unmute
	if (video.muted == true) {
		video.muted = false
		document.querySelector('#mute').textContent = "Mute"
	}
	// If unmuted, mute
	else {
		video.muted = true
		document.querySelector('#mute').textContent = "Unmute"
	}
})

// Add oldSchool class to video
document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Old School Video")
	video.className = "video oldSchool"
})

// Remove oldSchool class to video
document.querySelector("#orig").addEventListener("click", function() {
	console.log("Original Video")
	video.className = "video"
})

// Update volume info
document.querySelector('#slider').addEventListener("input", function() {
	document.querySelector("#volume").textContent = slider.value
	video.volume = slider.value / 100
})