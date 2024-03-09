var dateDiffInDays = function(date1, date2) {
  const utcdate1 = Date.UTC(
    parseInt(date1.substring(0, 4)),
    parseInt(date1.substring(5, 7)) - 1, // 0 based
    parseInt(date1.substring(8, 10))
  );
  const utcdate2 = Date.UTC(
    parseInt(date2.substring(0, 4)),
    parseInt(date2.substring(5, 7)) - 1, // 0 based
    parseInt(date2.substring(8, 10))
  );
  const diffInMs = utcdate2 - utcdate1;
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  return diffInDays;
};

const dateOne = prompt("Enter startDate");
const dateTwo = prompt("Enter endDate");
alert(dateDiffInDays(dateOne, dateTwo));
