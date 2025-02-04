import "./App.css";
import { useState } from "react";
import CurrencyInput from "./components/CurrencyInput";

function App() {
  const [krw, setKrw] = useState(0);
  const [usd, setUsd] = useState(0);

  const onChangeKrwToUsd = (value) => {
    setKrw(value);
    setUsd(value / 1464);
  };

  const onChangeUsdToKrw = (value) => {
    setUsd(value);
    setKrw(value * 1464);
  };

  return (
    <div className="app">
      <h1>환율 변환기 (KRW-USD)</h1>
      <section>
        krw :{" "}
        <CurrencyInput
          money={krw}
          onChangeCalculate={onChangeKrwToUsd}
        />
      </section>
      <section>
        usd :{" "}
        <CurrencyInput
          money={usd}
          onChangeCalculate={onChangeUsdToKrw}
        />
      </section>
    </div>
  );
}

export default App;
