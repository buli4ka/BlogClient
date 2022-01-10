import {
  DAYS_IN_MONTH,
  HOURS_IN_DAY,
  MILLISECONDS_IN_SECOND,
  MILLISECONDS_IN_YEAR,
  MINUTES_IN_HOUR,
  SECONDS_IN_MINUTE,
} from 'constants/time';

export const normalizeDate = (dateRequest, isCreated=true) =>{
  let date = new Date(dateRequest);
  const action = isCreated ? 'Created' : 'Updated';
  let fullDate = `${date.getDate()}th-${date.getMonth()}-${date.getFullYear()}`;

  let result = Date.now() - Date.parse(dateRequest);

  // eslint-disable-next-line no-magic-numbers
  if (result/MILLISECONDS_IN_YEAR > 10)
    return ;

  result =result/MILLISECONDS_IN_SECOND;
  if (result < SECONDS_IN_MINUTE)
    return `${action} ${Math.floor(result)} seconds ago`;

  result =result/SECONDS_IN_MINUTE;
  if (result < MINUTES_IN_HOUR)
    return `${action} ${Math.floor(result)} minute${result<2?'':'s'} ago`;

  result = result/MINUTES_IN_HOUR;
  if (result < HOURS_IN_DAY)
    return `${action} ${Math.floor(result)} hours ago`;

  result = result/HOURS_IN_DAY;
  if (result < DAYS_IN_MONTH)
    return `${action} ${Math.floor(result)} day${result<2?'':'s'} ago`;

  return fullDate;


};
