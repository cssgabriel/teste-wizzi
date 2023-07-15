import React from "react";

const Step1 = () => {
  const date = new Date();
  const [dateMin, setDateMin] = React.useState(
    addDays(date, 1).toISOString().slice(0, 10)
  );

  function addDays(date: Date, days: number) {
    const dateCopy = new Date(date);
    dateCopy.setDate(date.getDate() + days);
    return dateCopy;
  }

  function handleDeparture(e: React.ChangeEvent<HTMLInputElement>) {
    const dateDeparture = e.target.value;
    setDateMin(dateDeparture);
  }

  function handleBack(e: React.ChangeEvent<HTMLInputElement>) {
    const dateBack = e.target.value;
    const departure = new Date(dateMin);
    console.log(dateMin);
    // if (date)
  }

  return (
    <div id="step1">
      <label htmlFor="departure">Data de ida:</label>
      <input
        type="date"
        min={dateMin}
        name="departure"
        id="departure"
        required
        onChange={handleDeparture}
      />

      <label htmlFor="back">Data de volta:</label>
      <input
        min={dateMin}
        type="date"
        name="back"
        id="back"
        required
        onChange={handleBack}
      />
    </div>
  );
};

export default Step1;
