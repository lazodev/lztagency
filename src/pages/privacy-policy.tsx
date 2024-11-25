import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div>
      {/* Adiciona um espaçamento superior para evitar sobreposição do Header */}
      <div className="container mx-auto px-4 py-8 mt-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Política de Privacidade</h1>
        
        <p className="text-lg text-gray-700 mb-4">
          A Lazotec Digital Agency LTDA valoriza a privacidade dos seus clientes e visitantes. Esta política de privacidade descreve como coletamos, usamos e protegemos suas informações pessoais.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Coleta de Informações</h2>
        <p className="text-lg text-gray-700 mb-4">
          Coletamos informações pessoais que você nos fornece voluntariamente quando entra em contato conosco, solicita um orçamento ou utiliza nossos serviços. Essas informações podem incluir seu nome, endereço de e-mail, número de telefone e outras informações relevantes.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Uso das Informações</h2>
        <p className="text-lg text-gray-700 mb-4">
          As informações coletadas são usadas para responder às suas solicitações, fornecer nossos serviços, melhorar a experiência do usuário e enviar comunicações sobre atualizações, ofertas e eventos relacionados à [Nome da Agência].
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Compartilhamento de Informações</h2>
        <p className="text-lg text-gray-700 mb-4">
          Não compartilhamos suas informações pessoais com terceiros, exceto quando necessário para fornecer nossos serviços ou conforme exigido por lei. Em casos onde o compartilhamento é necessário, garantimos que os terceiros também protejam suas informações.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Segurança das Informações</h2>
        <p className="text-lg text-gray-700 mb-4">
          Implementamos medidas de segurança técnicas e organizacionais adequadas para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Cookies e Tecnologias Semelhantes</h2>
        <p className="text-lg text-gray-700 mb-4">
          Utilizamos cookies e tecnologias semelhantes para melhorar a experiência do usuário, analisar o uso do site e personalizar o conteúdo. Você pode optar por desativar os cookies nas configurações do seu navegador, mas isso pode afetar a funcionalidade do site.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Seus Direitos</h2>
        <p className="text-lg text-gray-700 mb-4">
          Você tem o direito de acessar, corrigir ou excluir suas informações pessoais que mantemos. Para exercer esses direitos, entre em contato conosco através dos canais fornecidos em nosso site.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Alterações nesta Política</h2>
        <p className="text-lg text-gray-700 mb-4">
          Podemos atualizar esta política de privacidade periodicamente. Recomendamos que você reveja esta política regularmente para se manter informado sobre como estamos protegendo suas informações.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Contato</h2>
        <p className="text-lg text-gray-700 mb-4">
          Se você tiver alguma dúvida sobre esta política de privacidade ou sobre como tratamos suas informações pessoais, entre em contato conosco através do e-mail juridico@lazotec.com ou pelo telefone +5588992086636.
        </p>

        <p className="text-lg text-gray-700 mt-8">
          Esta política de privacidade foi atualizada pela última vez em 14/08/2024.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
