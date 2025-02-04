const CurrencyInput = ({ money, onChangeCalculate }) => {
  return (
    <>
      <input
        type="number"
        value={Number(money)}
        onChange={(e) => {
          onChangeCalculate(e.target.value);
        }}
      />
    </>
  );
};

export default CurrencyInput;
