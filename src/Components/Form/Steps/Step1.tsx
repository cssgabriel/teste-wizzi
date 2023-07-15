const Step1 = () => {
  function addDays(date: Date, days: number) {
    const dateCopy = new Date(date);
    dateCopy.setDate(date.getDate() + days);
    return dateCopy;
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const dateBack = e.target.value;
  }

  const date = new Date();
  const dateMin = addDays(date, 1).toISOString().slice(0, 10);
  return (
    <div id="step1">
      <label htmlFor="departure">Data de ida:</label>
      <input
        type="date"
        min={dateMin}
        name="departure"
        id="departure"
        required
      />

      <label htmlFor="back">Data de volta:</label>
      <input
        min={dateMin}
        type="date"
        name="back"
        id="back"
        required
        onChange={handleChange}
      />
    </div>
  );
};

export default Step1;
