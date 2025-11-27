function DateDisplay() {
    const today = new Date();
    const formattedDate = today.toLocaleDateString('ru-RU', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  
    return (
      <p>Сегодня: {formattedDate}</p>
    );
  }
  
  export default DateDisplay;