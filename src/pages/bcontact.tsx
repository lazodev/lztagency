import React, { useState } from 'react';
import DefaultLayout from '@/layouts/DefaultLayout';
import { NextPageWithLayout } from '@/types/nextPageWithLayout';
import { ReactElement } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';

interface ContactProps {
  // Adicione quaisquer props que você precise buscar no servidor aqui
}

const Contact: NextPageWithLayout<ContactProps> = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus('Enviando...');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmissionStatus('Mensagem enviada com sucesso!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmissionStatus('Erro ao enviar a mensagem.');
      }
    } catch (error) {
      setSubmissionStatus('Erro ao enviar a mensagem.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 sm:py-16 lg:py-24">
      <Head>
        <title>Fale Conosco</title>
        <meta name="description" content="Entre em contato conosco para saber mais sobre como podemos ajudar sua empresa a crescer." />
      </Head>
      <div className="max-w-screen-xl mx-auto px-6 sm:px-8">
        <div className="mt-8 mb-12 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900">Fale Conosco</h1>
          <p className="text-lg text-gray-600 mt-4">
            Entre em contato conosco para saber mais sobre como podemos ajudar sua empresa a crescer.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Informações de Contato */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">Informações de Contato</h2>
              <p className="text-lg text-gray-600 mt-2">Entre em contato diretamente através dos meios abaixo:</p>
            </div>
            <div>
              <p className="text-lg text-gray-600">
                <strong>Email:</strong> <a href="mailto:contato@lazotec.com" className="text-blue-600">contato@lazotec.com</a>
              </p>
            </div>
            <div>
              <p className="text-lg text-gray-600">
                <strong>Telefone:</strong> <a href="tel:+5588992086636" className="text-blue-600">+55 88 99208-6636</a>
              </p>
            </div>
            <div>
              <p className="text-lg text-gray-600">
                <strong>Endereço:</strong> Atendimento online para todo o mundo.
              </p>
            </div>
          </div>

          {/* Formulário de Contato */}
          <div className="bg-white p-8 shadow-lg rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-lg font-semibold text-gray-800">Nome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Seu nome"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-semibold text-gray-800">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Seu email"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-semibold text-gray-800">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Sua mensagem"
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-blue-600 text-white text-lg font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                </button>
              </div>
              {submissionStatus && (
                <div className="mt-4 text-center text-lg text-gray-600">
                  {submissionStatus}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

// Função para buscar dados no servidor
export const getServerSideProps: GetServerSideProps<ContactProps> = async () => {
  // Adicione a lógica de busca de dados aqui, se necessário
  return {
    props: {}, // Passe os dados necessários como props
  };
};

Contact.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default Contact;
