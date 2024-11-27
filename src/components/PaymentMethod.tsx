{/* Este componente representa as opções de pagamento disponíveis */}
import { FC } from 'react';

interface PaymentMethodProps {
  title: string;
  icon: React.ReactNode;
  selected: boolean;
  onSelect: () => void;
}

const PaymentMethod: FC<PaymentMethodProps> = ({ title, icon, selected, onSelect }) => {
  return (
    <div
      className={`flex items-center space-x-4 cursor-pointer ${
        selected ? 'bg-gray-100' : 'hover:bg-gray-50'
      } p-4 rounded-md`}
      onClick={onSelect}
    >
      {icon}
      <span>{title}</span>
    </div>
  );
};

export default PaymentMethod;
