let hours = 0;
let minutes = 0;
let seconds = 0;
let interval;
let status = "stop";

// タイマーディスプレイ表示
function stopWatch(){
	seconds++;
	if(seconds >= 60){
		minutes++;
		seconds = 0;
		if(minutes >= 60){
			hours++;
			minutes = 0;
		}
	}
	// 十の位に0を表示
	if(hours < 10){
		newHours = "0" + hours;
	}
	else {
		newHours = hours;
	}
	if(minutes < 10){
		newMinutes = "0" + minutes;
	}
	else {
		newMinutes = minutes;
	}
	if(seconds < 10){
		newSeconds = "0" + seconds;
	}
	else {
		newSeconds = seconds;
	}
	document.getElementById("timer").innerHTML = newHours + ":" + newMinutes + ":" + newSeconds;
}
// スタートボタン
function start(){
	if(status == "stop"){
	interval = setInterval(stopWatch, 1000);
	status = "start";
	}
}
// ストップボタン
function stop(){
	if(status == "start"){
	clearInterval(interval);
	status = "stop";
	}
}
// リセットボタン
function reset(){
	status = "stop";
	clearInterval(interval);
	hours = 0;
	minutes = 0;
	seconds = 0;
	document.getElementById("timer").innerHTML = "00:00:00";
}