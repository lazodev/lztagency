{/* 
    Este componente exibe o resumo do pedido, incluindo itens, quantidades e total.
*/}
import { FC } from 'react';

interface SummaryProps {
  items: { name: string; quantity: number; price: number }[];
  total: number;
}

const Summary: FC<SummaryProps> = ({ items, total }) => {
  return (
    <div className="bg-gray-50 p-6 rounded-md shadow-md">
      <h3 className="text-lg font-bold mb-4">Resumo do Pedido</h3>
      <ul>
        {items.map((item, idx) => (
          <li key={idx} className="flex justify-between">
            <span>{item.name} x{item.quantity}</span>
            <span>R${item.price.toFixed(2)}</span>
          </li>
        ))}
      </ul>
      <div className="flex justify-between mt-4 font-semibold">
        <span>Total:</span>
        <span>R${total.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default Summary;
