import React from 'react';
import { ReactElement } from 'react';
import DefaultLayout from '@/layouts/DefaultLayout';
import { NextPageWithLayout } from '@/types/nextPageWithLayout';
import { GetServerSideProps } from 'next';
import Head from 'next/head';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  rating: number;
}

interface Testimonial {
  id: number;
  name: string;
  image: string;
  rating: number;
  comment: string;
}

interface PortfolioProps {
  projects: Project[];
  testimonials: Testimonial[];
}

const Portfolio: NextPageWithLayout<PortfolioProps> = ({ projects, testimonials }) => {
  // Função para renderizar as estrelas de avaliação
  const renderStars = (rating: number) => {
    const fullStars = Array.from({ length: rating }, (_, index) => (
      <svg
        key={`full-star-${index}`}
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="w-5 h-5 text-yellow-500"
      >
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ));

    const emptyStars = Array.from({ length: 5 - rating }, (_, index) => (
      <svg
        key={`empty-star-${index}`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="w-5 h-5 text-gray-300"
      >
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ));

    return [...fullStars, ...emptyStars];
  };

  return (
    <div className="bg-gray-50 py-16 sm:py-24 lg:py-32">
      <Head>
        <title>Nosso Portfólio - Lazotec</title>
        <meta name="description" content="Veja os projetos que já realizamos e as avaliações de nossos clientes." />
      </Head>
      <div className="max-w-screen-xl mx-auto px-6 sm:px-8">
        {/* Cabeçalho */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900">Nosso Portfólio</h1>
          <p className="text-lg text-gray-600 mt-4">Veja os projetos que já realizamos e as avaliações de nossos clientes</p>
        </div>

        {/* Seção de Projetos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800">{project.title}</h2>
                <p className="text-gray-600 mt-2">{project.description}</p>
                <a
                  href="#"
                  className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-semibold"
                >
                  Ver Projeto &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Seção de Provas Sociais */}
        <div className="mt-16">
          <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-8">O que nossos clientes dizem</h2>
          
          <div className="flex flex-wrap justify-center gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-8 shadow-lg rounded-lg max-w-xs text-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="mx-auto rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
                <div className="flex justify-center my-2">
                  {renderStars(testimonial.rating)} {/* Estrelas de avaliação */}
                </div>
                <p className="text-gray-600 mt-2">"{testimonial.comment}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <a
            href="#"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Entre em Contato
          </a>
        </div>
      </div>
    </div>
  );
};

// Função para buscar dados no servidor
export const getServerSideProps: GetServerSideProps<PortfolioProps> = async () => {
  // Simulação da busca de dados. Substitua com a lógica real de busca de dados.
  const projects: Project[] = [
    {
      id: 1,
      title: "Projeto 1: Loja Virtual",
      description: "Desenvolvimento de um e-commerce completo para um cliente no setor de moda.",
      image: "https://via.placeholder.com/500x300",
      rating: 5,
    },
    {
      id: 2,
      title: "Projeto 2: Blog Corporativo",
      description: "Desenvolvimento de site institucional para uma empresa de consultoria.",
      image: "https://via.placeholder.com/500x300",
      rating: 4,
    },
    {
      id: 3,
      title: "Projeto 3: Aplicativo Móvel",
      description: "Desenvolvimento de um app para otimizar a gestão de estoque de pequenas empresas.",
      image: "https://via.placeholder.com/500x300",
      rating: 4,
    },
  ];

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "João Silva",
      image: "https://via.placeholder.com/80x80",
      rating: 5,
      comment: "A equipe superou nossas expectativas. O projeto ficou perfeito e o suporte foi excepcional!",
    },
    {
      id: 2,
      name: "Maria Oliveira",
      image: "https://via.placeholder.com/80x80",
      rating: 4,
      comment: "O serviço foi entregue no prazo e a qualidade ficou incrível. Estamos muito satisfeitos com o resultado!",
    },
    {
      id: 3,
      name: "Carlos Pereira",
      image: "https://via.placeholder.com/80x80",
      rating: 4,
      comment: "Excelente trabalho! Recomendo a todos que buscam qualidade e eficiência.",
    },
  ];

  return {
    props: {
      projects,
      testimonials,
    },
  };
};

Portfolio.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default Portfolio;
