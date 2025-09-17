import React, { useState } from 'react';
import { Search, Filter, ChevronDown } from 'lucide-react';


const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('nome');

  // Dados mock dos profissionais
  const professionals = Array(9).fill(null).map((_, index) => ({
    id: index + 1,
    name: 'Nome usuário',
    description: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum. mostrar mais',
    tags: ['Java', 'Spring', 'React', 'Tag', 'Tag', 'Tag', 'Tag', 'Tag', '+']
  }));

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    // Implementar lógica de busca aqui
  };

  const handleFilterClick = () => {
    // Navegar para página de filtros
    // Se usando React Router: navigate('/filters');
    console.log('Abrir filtros');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Digite uma palavra chave"
              value={searchTerm}
              onChange={handleSearch}
              className="w-full pl-12 pr-4 py-4 bg-orange-400 text-white placeholder-orange-100 rounded-full text-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>

        {/* Filter Controls */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-orange-400 text-white px-4 py-2 rounded-md focus:outline-none"
            >
              <option value="nome">Nome</option>
              <option value="relevancia">Relevância</option>
              <option value="avaliacao">Avaliação</option>
            </select>
            <button className="p-2 text-gray-600 hover:text-gray-800">
              <ChevronDown className="w-5 h-5" />
            </button>
            <button 
              onClick={handleFilterClick}
              className="p-2 text-gray-600 hover:text-gray-800"
            >
              <Filter className="w-5 h-5" />
            </button>
          </div>
        </div>

      
      </div>

    </div>
  );
};

export default SearchPage;
