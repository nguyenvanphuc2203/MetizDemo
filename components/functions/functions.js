
const ONE_DAY_IN_MILISECOND = (24 * 60 * 60 * 1000);
const DATE = new Date();
const DAYS = [
  'C.Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'
];
const DAYSDETAIL = [
  'CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'
];
// get current times to compare with showtimes 05/30/2018 10:20
export const getCurrentDate = (d) => {
  var yyyy = d.getFullYear().toString();
  var mm = (d.getMonth() + 101).toString().slice(-2);
  var dd = (d.getDate() + 100).toString().slice(-2);
  var hh = d.getHours();
  var pp = d.getMinutes();
  var ss = d.getSeconds();
  return mm +'/'+ dd +'/'+ yyyy + ' ' + (hh <= 9 ? "0"+hh : hh) +':'+ (pp <= 9 ? "0"+pp : pp);
}

/*
  get next date and format mm - dd - yyyy 
*/
export const getNextDateFormat = (number_next_date) => {
  var next_date = new Date(DATE.getTime() + (number_next_date*ONE_DAY_IN_MILISECOND));
  return (next_date.getMonth()+1 > 9 ? next_date.getMonth()+1 : '0'+(next_date.getMonth()+1)) + '-' 
          + (next_date.getDate() > 9 ? next_date.getDate() : '0'+(next_date.getDate())) + '-'
          + next_date.getFullYear()
}
/*
  get next day and format Thứ hai, ba ... 
*/
export const getNextDay = (number_next_day) => {
  var next_date = new Date(DATE.getTime() + (number_next_day*ONE_DAY_IN_MILISECOND));
  var next_day = next_date.getDay();
  return DAYS[next_day];
}
/*
  get next day and format T2, T3 ... 
*/
export const getNextDayDetail = (number_next_day) => {
  var next_date = new Date(DATE.getTime() + (number_next_day*ONE_DAY_IN_MILISECOND));
  var next_day = next_date.getDay();
  return DAYSDETAIL[next_day];
}


