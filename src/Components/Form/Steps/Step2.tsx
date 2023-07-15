const Step2 = () => {
  return (
    <div id="step2">
      <label htmlFor="name">Nome:</label>
      <input type="text" name="name" id="name" required />

      <label htmlFor="years">Idade:</label>
      <input type="number" min="18" name="years" id="years" step="1" required />
    </div>
  );
};

export default Step2;
