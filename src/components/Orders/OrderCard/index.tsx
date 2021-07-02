import React, { useState } from 'react';
import { OrderCardContainer } from './styles';

export function OrderCard({ name, code }) {
  const [showCode, setShowCode] = useState(true);

  const handleShowCode = () => {
    setShowCode(!showCode);
    console.log(showCode);
  };
  return (
    <OrderCardContainer>
      <h4>{name}</h4>
      <a onClick={handleShowCode}>
        {showCode ? (
          <p>
            <code>{code}</code>
          </p>
        ) : (
          <code>Revelar o Código</code>
        )}
      </a>
    </OrderCardContainer>
  );
}
