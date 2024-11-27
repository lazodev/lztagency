{/* 
    O componente principal que integra os componentes 
    de método de pagamento, resumo e informações do cartão.
*/}

import { FC, useState } from 'react';
import { FieldError, useForm } from 'react-hook-form';
import PaymentMethod from './PaymentMethod';
import CardForm from './CardForm';
import Summary from './Summary';

const CheckoutForm: FC = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>('');
  const { handleSubmit, register, formState: { errors } } = useForm();
  const items = [{ name: 'Produto 1', quantity: 1, price: 99.90 }];
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const onSubmit = (data: any) => {
    console.log(data);
    // Aqui você pode integrar com a API de pagamento (ex: Stripe, PagSeguro)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Nome Completo</label>
        <input
          type="text"
          {...register('name', { required: 'Nome é obrigatório' })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500"
        />
        {errors.name && (
            <span className="text-red-500 text-sm">
                {(errors.name as FieldError).message}
            </span>
        )}
      </div>

      <div className="space-y-4">
        <PaymentMethod
          title="Cartão de Crédito"
          icon={<span className="text-2xl">💳</span>}
          selected={selectedPaymentMethod === 'creditCard'}
          onSelect={() => setSelectedPaymentMethod('creditCard')}
        />
        <PaymentMethod
          title="PIX"
          icon={<span className="text-2xl">📱</span>}
          selected={selectedPaymentMethod === 'pix'}
          onSelect={() => setSelectedPaymentMethod('pix')}
        />
        {/* Outras opções de pagamento */}

        {selectedPaymentMethod === 'creditCard' && <CardForm paymentMethod={selectedPaymentMethod} />}
        {/* Outros campos de pagamento */}
      </div>

      <Summary items={items} total={total} />

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700"
      >
        Finalizar Compra
      </button>
    </form>
  );
};

export default CheckoutForm;
