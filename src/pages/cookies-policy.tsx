import React from 'react';

const CookiePolicy: React.FC = () => {
  return (
    <div>
    <div className="container mx-auto px-4 py-8 mt-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Política de Cookies</h1>
      
      <p className="text-lg text-gray-700 mb-4">
        Esta Política de Cookies explica como a Lazotec utiliza cookies e tecnologias semelhantes para reconhecer você quando visita nosso site. Ela explica o que são essas tecnologias, por que as utilizamos, e seus direitos de controlar o uso delas.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. O que são cookies?</h2>
      <p className="text-lg text-gray-700 mb-4">
        Cookies são pequenos arquivos de texto que são armazenados no seu dispositivo (computador, tablet ou celular) quando você visita um site. Eles ajudam o site a funcionar corretamente, a entender como você interage com o site, e a melhorar sua experiência de navegação.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Como usamos cookies?</h2>
      <p className="text-lg text-gray-700 mb-4">
        Utilizamos cookies para diversos fins, incluindo:
      </p>
      <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
        <li>Facilitar o funcionamento e a segurança do site.</li>
        <li>Entender como os visitantes utilizam o site e melhorar sua funcionalidade.</li>
        <li>Personalizar conteúdo e anúncios com base em suas preferências.</li>
        <li>Realizar análises e relatórios de desempenho do site.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Tipos de cookies que utilizamos</h2>
      <p className="text-lg text-gray-700 mb-4">
        Os cookies que utilizamos podem ser categorizados da seguinte forma:
      </p>
      <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
        <li><strong>Cookies Essenciais:</strong> Necessários para o funcionamento do site. Eles permitem que você navegue e utilize as funcionalidades essenciais.</li>
        <li><strong>Cookies de Desempenho:</strong> Coletam informações sobre como você usa o site, ajudando-nos a melhorá-lo.</li>
        <li><strong>Cookies de Funcionalidade:</strong> Permitem que o site se lembre de suas escolhas (como nome de usuário, idioma) e forneça recursos aprimorados.</li>
        <li><strong>Cookies de Publicidade:</strong> Utilizados para fornecer anúncios relevantes aos seus interesses.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Como você pode controlar os cookies?</h2>
      <p className="text-lg text-gray-700 mb-4">
        Você tem o direito de decidir se deseja aceitar ou rejeitar cookies. Você pode ajustar as configurações de cookies no seu navegador para aceitar ou recusar cookies. Note que se você optar por bloquear todos os cookies, isso pode impactar sua experiência no site.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Alterações nesta Política de Cookies</h2>
      <p className="text-lg text-gray-700 mb-4">
        Podemos atualizar esta Política de Cookies periodicamente para refletir mudanças em nossas práticas ou por razões operacionais, legais ou regulatórias. Recomendamos que você revise esta política regularmente para se manter informado sobre nosso uso de cookies.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Contato</h2>
      <p className="text-lg text-gray-700 mb-4">
        Se você tiver alguma dúvida sobre o uso de cookies ou sobre esta Política de Cookies, entre em contato conosco através do e-mail juridico@lazotec.com.
      </p>

      <p className="text-lg text-gray-700 mt-8">
        Esta política de cookies foi atualizada pela última vez em 24/11/2024.
      </p>
    </div>
    </div>
  );
};

export default CookiePolicy;
