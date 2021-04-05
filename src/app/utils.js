const getFormattedTime = (time) => {
  let postfix = 'AM';
  let hour = time.getHours();
  let min = time.getMinutes();

  //format hours
  if (hour > 12) {
    hour = hour - 12 === 0 ? 12 : hour - 12;
    postfix = hour === 0 ? 'AM' : 'PM';
  }

  //format minutes
  // min = ('' + min).length > 1 ? min : '0' + min;
  return hour + ':' + min + ' ' + postfix;
};
