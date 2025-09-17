import React, { useState } from 'react';
import { ArrowLeft, ChevronDown } from 'lucide-react';

const FiltersPage = () => {
  const [selectedCategories, setSelectedCategories] = useState(['Programação', 'Design', 'Moda', 'Reforma']);
  const [selectedTags, setSelectedTags] = useState(['Java', 'PostgreSQL', 'React', 'Spring']);

  const categories = [
    { name: 'Programação', checked: true },
    { name: 'Categoria', checked: false },
    { name: 'Categoria', checked: false },
    { name: 'Design', checked: true },
    { name: 'Categoria', checked: false },
    { name: 'Categoria', checked: false },
    { name: 'Categoria', checked: false },
    { name: 'Categoria', checked: false },
    { name: 'Categoria', checked: false },
    { name: 'Moda', checked: true },
    { name: 'Categoria', checked: false },
    { name: 'Categoria', checked: false },
    { name: 'Reforma', checked: true },
    { name: 'Categoria', checked: false },
    { name: 'Categoria', checked: false },
    { name: 'Categoria', checked: false },
    { name: 'Categoria', checked: false },
    { name: 'Categoria', checked: false }
  ];

  const tags = [
    { name: 'Java', checked: true },
    { name: 'Tag', checked: false },
    { name: 'Tag', checked: false },
    { name: 'PostgreSQL', checked: true },
    { name: 'Tag', checked: false },
    { name: 'Tag', checked: false },
    { name: 'Tag', checked: false },
    { name: 'Tag', checked: false },
    { name: 'Tag', checked: false },
    { name: 'React', checked: true },
    { name: 'Tag', checked: false },
    { name: 'Tag', checked: false },
    { name: 'Spring', checked: true },
    { name: 'Tag', checked: false },
    { name: 'Tag', checked: false },
    { name: 'Tag', checked: false },
    { name: 'Tag', checked: false },
    { name: 'Tag', checked: false }
  ];

  const handleBack = () => {
    // Navegar de volta para a página de busca
    // Se usando React Router: navigate('/search');
    console.log('Voltar para busca');
  };

  const handleApplyFilters = () => {
    // Aplicar filtros e voltar para página de busca
    console.log('Aplicar filtros:', { selectedCategories, selectedTags });
    handleBack();
  };

  const handleCategoryChange = (categoryName, checked) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, categoryName]);
    } else {
      setSelectedCategories(selectedCategories.filter(c => c !== categoryName));
    }
  };

  const handleTagChange = (tagName, checked) => {
    if (checked) {
      setSelectedTags([...selectedTags, tagName]);
    } else {
      setSelectedTags(selectedTags.filter(t => t !== tagName));
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-gray-200 p-4">
        <div className="flex items-center space-x-4">
          <button 
            onClick={handleBack}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </button>
          <h1 className="text-2xl font-bold text-blue-900">Filtros</h1>
        </div>
      </div>

      <div className="p-6 max-w-4xl mx-auto">
        {/* Categories Filter */}
        <div className="border border-gray-300 rounded-lg p-6 mb-6">
          <h2 className="text-lg font-semibold text-center mb-6">Categorias</h2>
          <div className="grid grid-cols-3 gap-4">
            {categories.map((category, index) => (
              <label key={index} className="flex items-center space-x-2">
                <input 
                  type="checkbox" 
                  defaultChecked={category.checked}
                  onChange={(e) => handleCategoryChange(category.name, e.target.checked)}
                  className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
                />
                <span className="text-blue-900">{category.name}</span>
              </label>
            ))}
          </div>
          <div className="text-center mt-4">
            <button className="text-orange-500 hover:text-orange-600 flex items-center space-x-1 mx-auto">
              <span>Veja mais</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Tags Filter */}
        <div className="border border-gray-300 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-semibold text-center mb-6">Tags</h2>
          <div className="grid grid-cols-3 gap-4">
            {tags.map((tag, index) => (
              <label key={index} className="flex items-center space-x-2">
                <input 
                  type="checkbox" 
                  defaultChecked={tag.checked}
                  onChange={(e) => handleTagChange(tag.name, e.target.checked)}
                  className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
                />
                <span className="text-blue-900">{tag.name}</span>
              </label>
            ))}
          </div>
          <div className="text-center mt-4">
            <button className="text-orange-500 hover:text-orange-600 flex items-center space-x-1 mx-auto">
              <span>Veja mais</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Apply Button */}
        <div className="text-center">
          <button 
            onClick={handleApplyFilters}
            className="bg-orange-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            Aplicar
          </button>
        </div>
      </div>
    </div>
  );
};

export default FiltersPage;