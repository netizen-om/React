/* eslint-disable no-unused-vars */
import React from 'react';

function InputBox({
  label,
  amount,
  onCurrencyChange,
  onAmountChange,
  currencyOption = [],
  selectedCurrency = 'usd',
  amountDisabled = false,
  currencyDisable = false,
  className = '',
}) {
  return (
    <div className={`${className} flex flex-col bg-white p-3 gap-3 text-black rounded-lg`}>
      <div className="flex flex-cols text-gray-700 justify-between">
        <label>{label}</label>
        <label htmlFor="">Currency Type</label>
      </div>
      <div className="flex flex-cols justify-between">
        <input
          type="number"
          className="outline-none cursor-pointer"
          placeholder="Amount"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
        <div className="border-lime-600 pl-16">
          <select
            className="rounded-lg p-1 pl-12 bg-gray-100 cursor-pointer outline-none"
            value={selectedCurrency}
            onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
            disabled={currencyDisable}
          >
            {currencyOption.map((currency) => (
              <option value={currency} key={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
