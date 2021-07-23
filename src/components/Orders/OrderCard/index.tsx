import React, { useState } from 'react';
import Button from '../../Form/Button';
import { OrderCardContainer } from './styles';
import useClipboard from 'react-use-clipboard';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { FiCopy } from 'react-icons/fi';
import DateFormatter from '../../DateFormatter';
import { formatAmountForDisplay } from '../../../helpers/stripe/stripe-helpers';

export function OrderCard({ content, order }) {
  /* 
amount: 10
code: "ae28ea19-a367-4365-86c9-ceb014bce9b0"
createdAt: "2021-07-20T13:24:05.690Z"
currency: null
id: "121212"
order_status: "pending"
product: "Aepzera"
updatedAt: "2021-07-20T13:24:05.690Z"
userEmail: "cgbordin@gmail.com"
userID: "3da452be-ee78-4954-b1a0-fbcff9c3619a"
*/

  console.log(order);

  const [isCopied, setCopied] = useClipboard(order.code, {
    // `isCopied` will go back to `false` after 1000ms.
    successDuration: 2000,
  });

  const order_status =
    order.order_status !== 'pending'
      ? content.status_paid
      : content.status_pending;

  // console.log(order.amount);
  const amount = formatAmountForDisplay(order.amount, order.currency);

  return (
    <OrderCardContainer>
      <p>
        {content.order}: {order.id}
      </p>
      <p>
        {content.date}:
        <DateFormatter dateString={order?.createdOn?.toString()} />
      </p>
      <p>
        {content.status}: <code>{order_status}</code>
      </p>
      <p>
        {content.product}: {order.product}
      </p>
      <p>
        {content.amount}: {amount}
      </p>
      {order?.code && (
        <>
          <p>
            {content.code}: <code>{order.code}</code>
          </p>
          <Button primary width="100%" padding="0.4rem 0" onClick={setCopied}>
            {isCopied ? (
              <>
                <IoMdCheckmarkCircleOutline size={18} />
                <span>{content.copy_code_confirm}</span>
              </>
            ) : (
              <>
                <FiCopy size={18} />
                <span>{content.copy_code}</span>
              </>
            )}
          </Button>
        </>
      )}
    </OrderCardContainer>
  );
}
