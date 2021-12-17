import { DAYS_IN_MONTH, HOURS_IN_DAY, MILLISECONDS_IN_SECOND, MINUTES_IN_HOUR, SECONDS_IN_MINUTE } from 'constants/time';

export const normalizeDate = (dateRequest) =>{
  let date = new Date(dateRequest);

  let fullDate = `${date.getDate()}th-${date.getMonth()}-${date.getFullYear()}`;

  let result = Date.now() - Date.parse(dateRequest);

  result =result/MILLISECONDS_IN_SECOND;
  if (result < SECONDS_IN_MINUTE)
    return `Created ${Math.floor(result)} seconds ago`;

  result =result/SECONDS_IN_MINUTE;
  if (result < MINUTES_IN_HOUR)
    return `Created ${Math.floor(result)} minute${result<2?'':'s'} ago`;

  result = result/MINUTES_IN_HOUR;
  if (result < HOURS_IN_DAY)
    return `Created ${Math.floor(result)} hours ago`;

  result = result/HOURS_IN_DAY;
  if (result < DAYS_IN_MONTH)
    return `Created ${Math.floor(result)} day${result<2?'':'s'} ago`;

  return fullDate;


};
