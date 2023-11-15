function secondsToHoursMinutes(seconds) {
    var hours = Math.floor(seconds / 3600);  
    var remainingSeconds = seconds % 3600;  
    var minutes = Math.floor(remainingSeconds / 60);  
    return {
      hours: hours,
      minutes: minutes
    };
  }
  
 
  export default secondsToHoursMinutes;