export default {
  methods: {
    formatDate(inputDate) {
      const currentDate = new Date();
      const date = new Date(inputDate);
      
      const options = {
        weekday: 'narrow',
        hour: 'numeric',  // Numeric hour (e.g., 3)
        hour12: true,
      };
      
      if (this.isSameDay(currentDate, date)) {

        return 'Today ' +  date.toLocaleDateString('en-US', options);
      }
    
      // If neither Today nor Tomorrow, return the day name (e.g., Mon, Tue, etc.)
      return date.toLocaleDateString('en-US', options);
    },
    isSameDay(date1, date2) {
      return (
        date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate()
      );
    }
  }
}