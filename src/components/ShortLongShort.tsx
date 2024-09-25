import React, { useState } from "react";

const ShortLongShort: React.FC = () => {
  const [stringA, setStringA] = useState<string>("");
  const [stringB, setStringB] = useState<string>("");
  const [result, setResult] = useState<string>("");

  const determineFormat = (a: string, b: string): string => {
    if (a.length === 0 || b.length === 0) return a + b;
    return a.length < b.length ? a + b + a : b + a + b;
  };

  const handleGenerate = () => {
    setResult(determineFormat(stringA, stringB));
  };

  return (
    <div className="short-long-short-container">
      <h1 className="title">Qisqa + Uzoq + Qisqa generator</h1>
      <input
        type="text"
        placeholder=" A son kiriting"
        value={stringA}
        onChange={(e) => setStringA(e.target.value)}
        className="input-field"
      />
      <input
        type="text"
        placeholder="B son kiriting"
        value={stringB}
        onChange={(e) => setStringB(e.target.value)}
        className="input-field"
      />
      <button onClick={handleGenerate} className="generate-btn">
        Bosing
      </button>
      {result && (
        <div className="result">
          <h3>Natija:</h3>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
};

export default ShortLongShort;
