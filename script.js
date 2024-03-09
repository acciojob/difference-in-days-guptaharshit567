const dateDiffInDays = function(date1, date2){
 const utcdate1 = Date.UTC(
	 parseInt(date1.subString(0,4));
	 parseInt(date1.subString(5,7))-1; // 0 based
	 parseInt(date1.subString(8,10));
 );
 const utcdate2 = Date.UTC(
	 parseInt(date2.subString(0,4));
	 parseInt(date2.subString(5,7))-1; // 0 based
	 parseInt(date2.subString(8,10));
 );
	const diffInMs = utcdate2-utcdate1;
	const diffInDays = Math.floor(diffInMs1/(1000*60*60*24));
	return diffInDays;
};
const dateOne = prompt("enter startDate");
const dateTwo = prompt("enter endDate");
alert(dateDiffInDays(dateOne,dateTwo));