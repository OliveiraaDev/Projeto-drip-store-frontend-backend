import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FilterGroup = ({ title, options, type = 'checkbox' }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const handleOptionChange = (optionId) => {
    if (type === 'radio') {
      setSelectedOptions([optionId]);
    } else {
      setSelectedOptions(prev => 
        prev.includes(optionId)
          ? prev.filter(id => id !== optionId)
          : [...prev, optionId]
      );
    }
  };

  return (
    <div className="border-b border-drip-light-gray-3 pb-4 mb-4">
      <button
        onClick={toggleExpanded}
        className="flex items-center justify-between w-full text-left"
      >
        <h3 className="text-lg font-semibold text-drip-dark-gray-2">{title}</h3>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 text-drip-light-gray" />
        ) : (
          <ChevronDown className="w-5 h-5 text-drip-light-gray" />
        )}
      </button>
      
      {isExpanded && (
        <div className="mt-4 space-y-3">
          {options.map((option) => (
            <label key={option.id} className="flex items-center space-x-3 cursor-pointer">
              <input
                type={type}
                name={type === 'radio' ? title : undefined}
                checked={selectedOptions.includes(option.id)}
                onChange={() => handleOptionChange(option.id)}
                className="w-4 h-4 text-drip-primary border-drip-light-gray-2 rounded focus:ring-drip-primary"
              />
              <span className="text-drip-dark-gray-3 flex-1">{option.label}</span>
              {option.count && (
                <span className="text-drip-light-gray text-sm">({option.count})</span>
              )}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterGroup;

