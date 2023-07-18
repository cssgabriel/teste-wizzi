const Step2 = () => {
  return (
    <div id="step2">
      <label htmlFor="qtd">Quantidade de passageiros:</label>
      <input type="number" min="1" name="qtd" id="qtd" required />

      <label htmlFor="origin">Origem:</label>
      <input type="text" name="origin" id="origin" required />

      <label htmlFor="destination">Destino:</label>
      <input type="text" name="destination" id="destination" required />
    </div>
  );
};

export default Step2;
