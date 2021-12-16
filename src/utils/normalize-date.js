import { MILLISECONDS_IN_SECOND, MINUTES_IN_HOUR, SECONDS_IN_MINUTE } from 'constants/time';

export const normalizeDate = (dateRequest) =>{
  let date = new Date(dateRequest);

  let fullDate = `${date.getDate()}th-${date.getMonth()}-${date.getFullYear()}`;

  let result = Date.now() - Date.parse(dateRequest);

  result =result/MILLISECONDS_IN_SECOND/SECONDS_IN_MINUTE;
  if (result < SECONDS_IN_MINUTE)
    return `Created ${Math.floor(result)} minutes ago`;

  result = result/MINUTES_IN_HOUR;
  if (result < MINUTES_IN_HOUR)
    return `Created ${Math.floor(result)} hours ago`;

  return fullDate;


};
