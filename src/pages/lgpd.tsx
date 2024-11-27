import React from 'react';

const LGPD: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="mt-9 container mx-auto px-4 md:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Política de LGPD</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Introdução</h2>
            <p className="text-gray-700 leading-relaxed">
              Esta Política de Privacidade descreve como coletamos, usamos, processamos e compartilhamos suas informações, de acordo com a Lei Geral de Proteção de Dados Pessoais (LGPD), Lei nº 13.709/2018.
            </p>
          </section>
          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Coleta de Dados</h2>
            <p className="text-gray-700 leading-relaxed">
              Coletamos informações pessoais fornecidas diretamente por você, como nome, endereço de e-mail, telefone, entre outros, bem como informações coletadas automaticamente ao usar nossos serviços, como endereço IP, tipo de dispositivo, e dados de navegação.
            </p>
          </section>
          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Uso de Dados</h2>
            <p className="text-gray-700 leading-relaxed">
              Utilizamos suas informações pessoais para fornecer e melhorar nossos serviços, personalizar sua experiência, processar transações, enviar comunicações, cumprir obrigações legais e proteger nossos direitos e interesses.
            </p>
          </section>
          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Compartilhamento de Dados</h2>
            <p className="text-gray-700 leading-relaxed">
              Compartilhamos suas informações pessoais com terceiros apenas quando necessário para a prestação dos nossos serviços, cumprimento de obrigações legais, execução de contratos ou com o seu consentimento. Esses terceiros incluem provedores de serviços, parceiros comerciais e autoridades legais.
            </p>
          </section>
          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Segurança de Dados</h2>
            <p className="text-gray-700 leading-relaxed">
              Implementamos medidas de segurança adequadas para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição. No entanto, nenhum método de transmissão pela internet ou armazenamento eletrônico é 100% seguro.
            </p>
          </section>
          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Seus Direitos</h2>
            <p className="text-gray-700 leading-relaxed">
              De acordo com a LGPD, você tem o direito de acessar, corrigir, excluir, restringir o processamento e portabilizar suas informações pessoais. Você também tem o direito de retirar seu consentimento a qualquer momento e de apresentar uma reclamação à autoridade supervisora.
            </p>
          </section>
          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Alterações nesta Política</h2>
            <p className="text-gray-700 leading-relaxed">
              Podemos atualizar esta Política de Privacidade periodicamente. Quaisquer alterações serão publicadas nesta página com uma data de atualização revisada. Recomendamos que você revise esta política regularmente para se manter informado sobre nossas práticas de privacidade.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contato</h2>
            <p className="text-gray-700 leading-relaxed">
              Se você tiver alguma dúvida sobre esta Política de Privacidade ou desejar exercer seus direitos, entre em contato conosco pelo e-mail suporte@lazotec.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LGPD;
