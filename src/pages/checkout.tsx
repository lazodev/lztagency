import { ReactElement } from 'react';
import { NextPageWithLayout } from '@/types/nextPageWithLayout';
import SimpleLayout from '@/layouts/SimpleLayout';
import CheckoutForm from '@/components/CheckoutForm';

const Checkout: NextPageWithLayout = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-semibold mb-6">Finalizar Pedido</h2>
        <CheckoutForm />
      </div>
    </div>
  );
};
Checkout.getLayout = function getLayout(page: ReactElement) {
  return <SimpleLayout>{page}</SimpleLayout>
};

export default Checkout;
