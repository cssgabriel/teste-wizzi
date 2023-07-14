const Step1 = () => {
  function addDays(date: Date, days: number) {
    const dateCopy = new Date(date);
    dateCopy.setDate(date.getDate() + days);
    return dateCopy;
  }

  const date = new Date();
  const dateMin = addDays(date, 1).toISOString().slice(0, 10);
  return (
    <div id="step1">
      <label htmlFor="departure">Data de ida:</label>
      <input type="date" min={dateMin} value={dateMin} name="departure" />

      <label htmlFor="back">Data de volta:</label>
      <input type="date" name="back" />
    </div>
  );
};

export default Step1;
