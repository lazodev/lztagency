// pages/checkout.tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { NextPage } from 'next';

interface CheckoutFormData {
  name: string;
  email: string;
  cardNumber: string;
  expirationDate: string;
  cvc: string;
  plan: string;
  paymentMethod: string;
  secondCardNumber?: string;
  secondCardExpirationDate?: string;
  secondCardCvc?: string;
}

const Checkout: NextPage = () => {
  // Correção: Desestruturar formState e watch do useForm
  const { register, handleSubmit, formState: { errors }, watch } = useForm<CheckoutFormData>();

  // Função de envio do formulário
  const onSubmit = (data: CheckoutFormData) => {
    console.log(data);
    // Aqui você pode enviar os dados para a API de pagamento
  };

  // Monitorar o valor do método de pagamento
  const paymentMethod = watch('paymentMethod');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Pagamento da Assinatura</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Nome completo */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Nome Completo</label>
            <input
              type="text"
              {...register('name', { required: 'Nome é obrigatório' })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              {...register('email', { required: 'Email é obrigatório' })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
          </div>

          {/* Método de pagamento */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Método de Pagamento</label>
            <select
              {...register('paymentMethod', { required: 'Selecione um método de pagamento' })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Selecione um método</option>
              <option value="pix">Pix</option>
              <option value="boleto">Boleto</option>
              <option value="cartao">Cartão de Crédito</option>
              <option value="doisCartoes">Dois Cartões</option>
            </select>
            {errors.paymentMethod && <span className="text-red-500 text-sm">{errors.paymentMethod.message}</span>}
          </div>

          {/* Número do cartão */}
          {(paymentMethod === 'cartao' || paymentMethod === 'doisCartoes') && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700">Número do Cartão</label>
                <input
                  type="text"
                  {...register('cardNumber', { required: 'Número do cartão é obrigatório', maxLength: { value: 16, message: 'Número do cartão inválido' } })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.cardNumber && <span className="text-red-500 text-sm">{errors.cardNumber.message}</span>}
              </div>

              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label className="block text-sm font-medium text-gray-700">Data de Expiração</label>
                  <input
                    type="text"
                    placeholder="MM/AA"
                    {...register('expirationDate', { required: 'Data de expiração é obrigatória' })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  {errors.expirationDate && <span className="text-red-500 text-sm">{errors.expirationDate.message}</span>}
                </div>

                <div className="w-1/2">
                  <label className="block text-sm font-medium text-gray-700">CVC</label>
                  <input
                    type="text"
                    {...register('cvc', { required: 'CVC é obrigatório', maxLength: { value: 3, message: 'CVC inválido' } })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  {errors.cvc && <span className="text-red-500 text-sm">{errors.cvc.message}</span>}
                </div>
              </div>

              {/* Campos para o segundo cartão, se necessário */}
              {paymentMethod === 'doisCartoes' && (
                <>
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700">Número do Segundo Cartão</label>
                    <input
                      type="text"
                      {...register('secondCardNumber', { required: 'Número do segundo cartão é obrigatório', maxLength: { value: 16, message: 'Número do segundo cartão inválido' } })}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    {errors.secondCardNumber && <span className="text-red-500 text-sm">{errors.secondCardNumber.message}</span>}
                  </div>

                  <div className="flex space-x-4">
                    <div className="w-1/2">
                      <label className="block text-sm font-medium text-gray-700">Data de Expiração (2º Cartão)</label>
                      <input
                        type="text"
                        placeholder="MM/AA"
                        {...register('secondCardExpirationDate', { required: 'Data de expiração do segundo cartão é obrigatória' })}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                      {errors.secondCardExpirationDate && <span className="text-red-500 text-sm">{errors.secondCardExpirationDate.message}</span>}
                    </div>

                    <div className="w-1/2">
                      <label className="block text-sm font-medium text-gray-700">CVC (2º Cartão)</label>
                      <input
                        type="text"
                        {...register('secondCardCvc', { required: 'CVC do segundo cartão é obrigatório', maxLength: { value: 3, message: 'CVC do segundo cartão inválido' } })}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                      {errors.secondCardCvc && <span className="text-red-500 text-sm">{errors.secondCardCvc.message}</span>}
                    </div>
                  </div>
                </>
              )}
            </>
          )}

          {/* Plano de Assinatura */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Plano de Assinatura</label>
            <select
              {...register('plan', { required: 'Selecione um plano' })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Selecione um plano</option>
              <option value="basic">Básico - R$19,90/mês</option>
              <option value="premium">Premium - R$39,90/mês</option>
              <option value="enterprise">Enterprise - R$99,90/mês</option>
            </select>
            {errors.plan && <span className="text-red-500 text-sm">{errors.plan.message}</span>}
          </div>

          {/* Botão de envio */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Confirmar Pagamento
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
