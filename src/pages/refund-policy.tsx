import React from 'react';

const RefundPolicy: React.FC = () => {
  return (
    <div className="py-10 mt-7">
      <div className="container mx-auto px-4 md:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Política de Reembolso</h1>
        <div className="bg-white p-6">
          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Reembolso de Serviços Prestados</h2>
            <p className="text-gray-700 leading-relaxed">
              Valorizamos a satisfação de nossos clientes e oferecemos uma política de reembolso justa para serviços prestados. Se você não estiver satisfeito com os serviços recebidos, por favor, entre em contato conosco dentro de 30 dias após a conclusão do serviço para discutir as opções de reembolso.
            </p>
          </section>
          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Prazos para Solicitação de Reembolso</h2>
            <p className="text-gray-700 leading-relaxed">
              As solicitações de reembolso devem ser feitas dentro dos seguintes prazos:
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li>Serviços de consultoria: até 30 dias após a conclusão do serviço.</li>
              <li>Serviços de desenvolvimento web: até 45 dias após a entrega final do projeto.</li>
              <li>Outros serviços: até 30 dias após a prestação do serviço.</li>
            </ul>
          </section>
          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Condições para Reembolso</h2>
            <p className="text-gray-700 leading-relaxed">
              O reembolso será concedido sob as seguintes condições:
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li>A solicitação de reembolso deve ser feita dentro do prazo especificado.</li>
              <li>O cliente deve fornecer uma descrição detalhada do motivo da solicitação de reembolso.</li>
              <li>O serviço deve ter sido prestado em conformidade com os termos acordados.</li>
              <li>O reembolso será proporcional ao serviço não utilizado ou insatisfatório, conforme determinado pela nossa equipe.</li>
            </ul>
          </section>
          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Processo de Reembolso</h2>
            <p className="text-gray-700 leading-relaxed">
              Para iniciar uma solicitação de reembolso, siga estas etapas:
            </p>
            <ol className="list-decimal list-inside text-gray-700 mt-2">
              <li>Entre em contato com nossa equipe de suporte ao cliente pelo e-mail suporte@lazotec.com.</li>
              <li>Forneça os detalhes do serviço e o motivo da solicitação de reembolso.</li>
              <li>Nossa equipe revisará sua solicitação e entrará em contato com você dentro de 5 dias úteis.</li>
              <li>Se aprovado, o reembolso será processado dentro de 10 dias úteis a partir da data de aprovação.</li>
            </ol>
          </section>
          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Exclusões</h2>
            <p className="text-gray-700 leading-relaxed">
              As seguintes situações não são elegíveis para reembolso:
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li>Serviços parcialmente concluídos ou em andamento.</li>
              <li>Solicitações de reembolso feitas fora dos prazos especificados.</li>
              <li>Serviços prestados por terceiros contratados através de nossa plataforma.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contato</h2>
            <p className="text-gray-700 leading-relaxed">
              Se você tiver alguma dúvida sobre nossa política de reembolso, entre em contato com nossa equipe de suporte ao cliente pelo e-mail suporte@lazotec.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
