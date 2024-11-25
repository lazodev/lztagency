import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'O que é gestão de tráfego?',
    answer: 'Gestão de tráfego envolve a otimização de campanhas publicitárias para direcionar o público certo para seu site ou landing page, maximizando as conversões.',
  },
  {
    question: 'Como funciona o desenvolvimento de bots?',
    answer: 'Desenvolvemos bots personalizados para automatizar processos de atendimento ao cliente, captura de leads e muito mais, aumentando a eficiência do seu negócio.',
  },
  {
    question: 'Quanto tempo leva para desenvolver um site?',
    answer: 'O tempo de desenvolvimento de um site pode variar bastante dependendo da complexidade do projeto. Um site simples pode levar de 2 a 4 semanas, enquanto projetos mais complexos, como lojas virtuais ou plataformas personalizadas, podem levar de 2 a 3 meses ou mais. Fatores como feedback e revisões também influenciam o prazo final.',
  },
  {
    question: 'Quais serviços de automação vocês oferecem?',
    answer: 'Oferecemos automação de marketing, chatbots, automação de processos internos e muito mais para otimizar e escalar suas operações.',
  },
  {
    question: 'Vocês oferecem manutenção e suporte após a entrega do site?',
    answer: 'Sim, oferecemos planos de manutenção e suporte para garantir que seu site permaneça atualizado e funcional. Isso inclui atualizações de segurança, correções de bugs, e pequenas modificações conforme necessário. Entre em contato para saber mais sobre nossos planos de suporte contínuo.',
  },
  {
    question: 'O que é SEO e por que é importante para o meu site?',
    answer: 'SEO (Search Engine Optimization) é o processo de otimização do seu site para melhorar sua visibilidade nos motores de busca como o Google. Um bom SEO ajuda seu site a aparecer nas primeiras páginas dos resultados de busca, aumentando o tráfego orgânico e potencialmente gerando mais clientes. É uma parte essencial de qualquer estratégia de marketing digital.',
  },
  {
    question: 'Vocês oferecem serviços de criação de conteúdo para o meu site ou blog?',
    answer: 'Sim, nossa equipe de marketing de conteúdo pode criar textos otimizados para SEO, artigos de blog, descrições de produtos e mais. Trabalhamos para entender a voz e os objetivos da sua marca, criando conteúdo que ressoe com seu público e impulsione o engajamento.',
  },
  {
    question: 'Posso acompanhar o progresso do meu projeto durante o desenvolvimento?',
    answer: 'Absolutamente! Mantemos uma comunicação aberta e transparente durante todo o processo de desenvolvimento. Utilizamos ferramentas de gerenciamento de projetos onde você pode ver o andamento das tarefas, dar feedback e fazer perguntas. Fazemos reuniões regulares para garantir que estamos alinhados com suas expectativas.',
  },
  {
    question: 'Vocês oferecem serviços de redesign de sites existentes?',
    answer: 'Sim, oferecemos serviços de redesign para sites existentes. Podemos ajudar a modernizar a aparência, melhorar a usabilidade, otimizar para dispositivos móveis e aumentar a performance do seu site. Nosso objetivo é garantir que seu site ofereça a melhor experiência possível para os usuários.',
  },
  {
    question: 'Quais plataformas de e-commerce vocês utilizam para criar lojas virtuais?',
    answer: 'Trabalhamos com várias plataformas de e-commerce, incluindo Shopify, WooCommerce, Magento e outras, dependendo das necessidades específicas do seu negócio. Podemos ajudar a escolher a plataforma mais adequada e personalizada para suas metas de vendas online.',
  },
  {
    question: 'Como posso garantir que meu site seja seguro contra ataques e invasões?',
    answer: 'A segurança é uma prioridade para nós. Implementamos várias medidas de segurança, como certificados SSL, firewalls, backups regulares e atualizações de software. Além disso, oferecemos serviços de monitoramento contínuo para identificar e mitigar quaisquer ameaças em potencial.',
  },
  {
    question: 'Vocês oferecem serviços de marketing digital além do desenvolvimento de sites?',
    answer: 'Sim, além do desenvolvimento de sites, oferecemos uma gama completa de serviços de marketing digital, incluindo gestão de campanhas de tráfego pago (Google Ads, Facebook Ads), SEO, marketing de conteúdo, social media e email marketing. Nosso objetivo é ajudar a aumentar sua visibilidade online e atrair mais clientes.',
  },
  {
    question: 'Como posso acompanhar os resultados do meu site após o lançamento?',
    answer: 'Fornecemos relatórios detalhados de desempenho usando ferramentas como Google Analytics e Search Console. Esses relatórios incluem métricas importantes como tráfego do site, comportamento dos usuários, conversões e muito mais. Também oferecemos reuniões periódicas para discutir os resultados e ajustar as estratégias conforme necessário.',
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight text-center">
          Clintes tambem perguntam
        </h2>
        <div className="mt-8 max-w-2xl mx-auto">
          {faqData.map((item, index) => (
            <div key={index} className="border-b border-gray-300">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left py-4 text-lg font-semibold text-gray-700 flex justify-between items-center focus:outline-none"
              >
                {item.question}
                <span className="ml-2">
                  {openIndex === index ? '-' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className="py-2 text-gray-600">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
