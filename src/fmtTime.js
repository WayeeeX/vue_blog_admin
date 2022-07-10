export default function fmtTime(time){
	var date = new Date(time);
	var year = date.getFullYear();
	var month = date.getMonth();
	var day = date.getDay();
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();
	if (month < 10) {
	    month = "0" + month;
	}
	if (day < 10) {
	    day = "0" + day;
	}
	var fmtTime = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;
	return fmtTime;
}