import { ReactElement } from 'react';
import { NextPageWithLayout } from '@/types/nextPageWithLayout';
import SimpleLayout from '@/layouts/SimpleLayout';
import Logo from '@/assets/Logo.png'
import Image from 'next/image';

const LoginPage: NextPageWithLayout = () => {
  return (
    <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <Image
            alt="Logo Lazotec Empreendimentos Digitais LTDA"
            src={ Logo }
            className="mx-auto h-10 w-auto"
            />
            <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
            Faça login na sua conta
            </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form action="#" method="POST" className="space-y-6">
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                Endereço de email
                </label>
                <div className="mt-2">
                <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                />
                </div>
            </div>

            <div>
                <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                    Senha
                </label>
                <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Esqueceu sua senha?
                    </a>
                </div>
                </div>
                <div className="mt-2">
                <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    autoComplete="current-password"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                />
                </div>
            </div>

            <div>
                <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                Entrar
                </button>
            </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
            Não é membro?{' '}
            <a href="/sign-up" className="font-semibold text-indigo-600 hover:text-indigo-500">
                Criar conta
            </a>
            </p>
        </div>
        </div>
    </>
  );
};

LoginPage.getLayout = function getLayout(page: ReactElement) {
    return <SimpleLayout>{page}</SimpleLayout>
};

export default LoginPage;
