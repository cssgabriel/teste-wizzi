const Step3 = () => {
  return (
    <div id="step3">
      <label htmlFor="name">Nome do passageiro responsável:</label>
      <input type="text" name="name" id="name" required />

      <label htmlFor="email">E-mail do passageiro responsável:</label>
      <input type="email" name="email" id="email" required />
    </div>
  );
};

export default Step3;
