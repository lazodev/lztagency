import React, { useState } from 'react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-full p-8">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-4">
          Assine nossa Newsletter
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Receba as últimas novidades e promoções diretamente no seu e-mail.
        </p>

        {!isSubscribed ? (
          <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
            <input
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Inscrever-se
            </button>
          </form>
        ) : (
          <div className="text-center text-green-600 font-semibold">
            Você se inscreveu com sucesso!
          </div>
        )}
      </div>
    </div>
  );
};

export default Newsletter;
