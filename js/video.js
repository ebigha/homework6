var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
	console.log("Starting");
	console.log(video.volume)
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	var vol = document.querySelector("#volume").innerHTML = video.volume * 100 + "%";

});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * .9;
	console.log("Slower Video by" + video.playbackRate);

});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 1.1;
	console.log("Faster Video by" + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime = video.currentTime + 5;
	if (video.ended){
		video.currentTime = 0;
		video.play();}
	console.log("Video current time is" + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted){
		video.muted = false;
		var vol = document.querySelector("#volume").innerHTML = video.volume *100 + "%"
		console.log("Unmuted");
	}
	else {
		video.muted = true;
		var vol = document.querySelector("#volume").innerHTML = "0%"
		console.log("Muted");
	}
});

document.querySelector("#volumeSlider").addEventListener("click", function(){
	var vol = document.querySelector("#volume").innerHTML;
	vol = volumeSlider.value;
	video.volume = vol / 100;
	document.querySelector("#volume").innerHTML = vol + "%";
	console.log("Volume level is" + volumeSlider.value)
});

document.querySelector("#old").addEventListener("click", function(){
	video.classList.add("oldTime");
	console.log("oldschool");
});

document.querySelector("#original").addEventListener("click", function(){
	video.classList.remove("oldTime");
	console.log("original");
});
