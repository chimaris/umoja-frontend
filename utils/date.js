export function formatDate() {
    const currentDate = new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = months[currentDate.getMonth()];
    const day = currentDate.getDate();
    const year = currentDate.getFullYear();
  
    return `${month} ${day}, ${year}`;
  }

export const getdateRegistered = (dateCreated) =>  {
  const dateString = dateCreated;
  const date = new Date(dateString)

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

    return `${month} ${day}, ${year}`;
}

export const getDateTime = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleString('en-GB', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });
}
export const calculateAge = (birthDate) => {
  const currentDate = new Date();
  const birthDateObj = new Date(birthDate);
  const ageInMilliseconds = currentDate - birthDateObj;
  const ageInYears = ageInMilliseconds / (365 * 24 * 60 * 60 * 1000);
  return Math.floor(ageInYears);
}
export function getCurrentTransactionDate() {
      const currentDate = new Date();
      
      // Days of the week
      const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      
      // Months
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      
      // Get the day of the week, month, and year
      const dayOfWeek = daysOfWeek[currentDate.getDay()];
      const month = months[currentDate.getMonth()];
      const dayOfMonth = currentDate.getDate();
      const year = currentDate.getFullYear();
      
      // Get the time zone offset in minutes
      const timeZoneOffset = currentDate.getTimezoneOffset();
      // Convert the time zone offset to hours and add it to the current date
      const timeZoneOffsetHours = Math.abs(timeZoneOffset / 60);
      const timeZoneOffsetMinutes = Math.abs(timeZoneOffset % 60);
      const timeZone = `GMT${timeZoneOffset < 0 ? '+' : '-'}${timeZoneOffsetHours}:${timeZoneOffsetMinutes}`;
      
      // Construct the transaction date string
      const transactionDate = `${dayOfWeek}, ${month} ${dayOfMonth}, ${year} (${timeZone})`;
      
      return transactionDate;
    }