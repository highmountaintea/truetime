function TrueTime(year, month, date, hour, minute, second, timezone) {
  this.year = year;
  this.month = month;
  this.date = date;
  this.hour = hour;
  this.minute = minute;
  this.second = second;
  this.timezone = timezone;
}

TrueTime.create = function (year, month, date, hour, minute, second, timezone) {
  return new TrueTime(year, month, date, hour, minute, second, timezone);
};

module.exports = TrueTime;
