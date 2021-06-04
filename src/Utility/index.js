
export const randomNumber = (min = 100000, max = 999999) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

export const convertToPST = (dateTime = new Date()) => {
  let d = new Date(dateTime).toLocaleString(undefined, { timeZone: "America/Los_Angeles" });
  return d
}

export const getDaysArray = (start, end) => {
  for (
    var a = [], d = new Date(start);
    d <= new Date(end);
    d.setDate(d.getDate() + 1)
  ) {
    a.push((new Date(d)));
  }
  return a;
};

export const timeFrom = (x) => {
  var dates = [];
  for (let i = 0; i < Math.abs(x); i++) {
    dates.push(new Date(new Date().getTime() - ((x >= 0 ? i : (i - i - i)) * 24 * 60 * 60 * 1000)));
  }
  return dates;
}

export const separateDaysByDates = (dateList = []) => {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const data = {
    "Sunday": [],
    "Monday": [],
    "Tuesday": [],
    "Wednesday": [],
    "Thursday": [],
    "Friday": [],
    "Saturday": []
  }
  dateList.map(date => {
    let d = new Date(date).getDay()
    data[days[d]].push(date)
  })
  return data;
}



export default {
  randomNumber,
  convertToPST,
  getDaysArray,
  timeFrom,
  separateDaysByDates
}