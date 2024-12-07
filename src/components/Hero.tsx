import React, { useState } from 'react';

const Hero: React.FC = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
  };

  return (
    <section className="bg-gray-900 text-white relative overflow-hidden h-screen flex flex-col justify-center pb-12">
      <div className="container mx-auto flex flex-col items-center justify-center h-full px-4 md:px-8 pt-16">
        {/* Headline Persuasiva */}
        <h1 className="mt-6 text-2xl md:text-4xl font-bold leading-tight text-center">
          Transforme suas ideias em realidade digital
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-200 text-center">
          Ajudamos sua empresa a crescer através de estratégias digitais inovadoras e personalizadas.
        </p>
        
        {/* Capa do Vídeo */}
        <div
          className="mt-8 w-full max-w-[900px] h-[500px] relative cursor-pointer"
          onClick={handlePlayVideo}
        >
          {!isVideoPlaying ? (
            <div
              className="w-full h-full bg-cover bg-center rounded-2xl"
              style={{ backgroundImage: "url('../assets/banner-capa-youtube.png')" }}
            >
              <div className="absolute inset-0 flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 text-white animate-pulse"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14.828 9.172a4 4 0 010 5.656l-6.364 6.364a4 4 0 01-5.656-5.656l6.364-6.364a4 4 0 015.656 0z"
                  />
                </svg>
              </div>
            </div>
          ) : (
            <iframe
              className="w-full h-full object-cover rounded-2xl"
              src="https://www.youtube.com/embed/bgUbl6nNLOI?autoplay=1"
              title="Apresentação da Agência Lazotec Digital"
              style={{ border: 'none' }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>

        {/* Botão CTA pulsante com link para o WhatsApp */}
        <div className="mt-8 flex justify-center">
          <a
            href="https://api.whatsapp.com/send?phone=5588992086636&text=Oi,%20quero%20uma%20consultoria%20gratuita"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="px-6 py-3 bg-blue-600 border-2 border-blue-600 hover:bg-blue-700 text-white rounded-md transform transition-all duration-150 ease-in-out hover:scale-105 hover:shadow-lg hover:outline-2 hover:outline-blue-500/50"
            >
              Quero uma consultoria grátis
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
