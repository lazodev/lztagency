{/* 
    Este componente permite ao usuário adicionar informações 
    do cartão de crédito (incluindo dois cartões, se necessário) 
*/}
import { FC } from 'react';
import { useForm, FieldError } from 'react-hook-form';
import MaskedInput from 'react-text-mask';

interface CardFormProps {
  paymentMethod: string;
}

interface FormData {
  cardNumber: string;
  cardHolder: string;
  expirationDate: string;
  cvv: string;
}

const CardForm: FC<CardFormProps> = ({ paymentMethod }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Enviar os dados do cartão para o backend ou gateway de pagamento
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Número do cartão */}
      <div>
        <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Número do Cartão</label>
        <MaskedInput
          {...register('cardNumber', { 
            required: 'Número do cartão é obrigatório',
            pattern: {
              value: /^[0-9]{16}$/, 
              message: 'Número do cartão inválido'
            }
          })}
          mask={[/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/]}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500"
          placeholder="1234 5678 9876 5432"
        />
        {errors.cardNumber && <span className="text-red-500 text-sm">{(errors.cardNumber as FieldError).message}</span>}
      </div>

      {/* Nome do titular */}
      <div>
        <label htmlFor="cardHolder" className="block text-sm font-medium text-gray-700">Nome do Titular</label>
        <input
          type="text"
          {...register('cardHolder', { required: 'Nome do titular é obrigatório' })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500"
          placeholder="Nome do titular"
        />
        {errors.cardHolder && <span className="text-red-500 text-sm">{(errors.cardHolder as FieldError).message}</span>}
      </div>

      {/* Data de validade */}
      <div>
        <label htmlFor="expirationDate" className="block text-sm font-medium text-gray-700">Data de Validade</label>
        <MaskedInput
          {...register('expirationDate', { 
            required: 'Data de validade é obrigatória',
            pattern: {
              value: /^(0[1-9]|1[0-2])\/\d{2}$/, 
              message: 'Data inválida (MM/AA)'
            }
          })}
          mask={[/\d/, /\d/, '/', /\d/, /\d/]}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500"
          placeholder="MM/AA"
        />
        {errors.expirationDate && <span className="text-red-500 text-sm">{(errors.expirationDate as FieldError).message}</span>}
      </div>

      {/* Código de segurança (CVV) */}
      <div>
        <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">Código de Segurança (CVV)</label>
        <input
          type="text"
          {...register('cvv', { 
            required: 'Código de segurança é obrigatório',
            pattern: {
              value: /^[0-9]{3}$/,
              message: 'Código de segurança inválido'
            }
          })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500"
          placeholder="123"
        />
        {errors.cvv && <span className="text-red-500 text-sm">{(errors.cvv as FieldError).message}</span>}
      </div>

      {/* Submit button */}
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700"
      >
        Confirmar Pagamento
      </button>
    </form>
  );
};

export default CardForm;
