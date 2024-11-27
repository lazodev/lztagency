import React, { useState } from 'react';
import { XMarkIcon, UserCircleIcon, PhoneIcon, EnvelopeIcon, PencilIcon } from '@heroicons/react/24/outline'; // Heroicons

interface PopupProps {
  closePopup: () => void;
}

const Popup: React.FC<PopupProps> = ({ closePopup }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    description: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData); // Aqui você pode adicionar a lógica de envio
    closePopup();
  };

  return (
    <div
      className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center"
      onClick={closePopup}
    >
      <div
        className="bg-white p-6 rounded-lg w-96 shadow-lg"
        onClick={(e) => e.stopPropagation()} // Previne que o clique fora do popup feche o modal
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Solicitar Orçamento</h2>
          <button
            onClick={closePopup}
            className="text-gray-600 hover:text-gray-800"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4 flex items-center">
            <UserCircleIcon className="mr-2 h-6 w-6 text-gray-600" />
            <input
              type="text"
              name="name"
              placeholder="Nome"
              value={formData.name}
              onChange={handleChange}
              className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4 flex items-center">
            <PhoneIcon className="mr-2 h-6 w-6 text-gray-600" />
            <input
              type="text"
              name="phone"
              placeholder="Celular"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4 flex items-center">
            <EnvelopeIcon className="mr-2 h-6 w-6 text-gray-600" /> {/* Corrigido para EnvelopeIcon */}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4 flex items-center">
            <PencilIcon className="mr-2 h-6 w-6 text-gray-600" />
            <textarea
              name="description"
              placeholder="Breve descrição"
              value={formData.description}
              onChange={handleChange}
              className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Popup;
