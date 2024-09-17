'use client';

import React, { useState } from 'react';

interface RampComponent {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

const componentTypes = [
  'Select a component',
  '4ft ramp section',
  '5ft ramp section',
  '6ft ramp section',
  '7ft ramp section',
  '8ft ramp section',
  '5x4 ft landing',
  '5x5 ft landing',
  '5x8 ft landing',
];

interface RampConfigurationV2Props {
  onConfigurationChange: (components: RampComponent[]) => void;
}

const RampConfigurationV2: React.FC<RampConfigurationV2Props> = ({ onConfigurationChange }) => {
  const [components, setComponents] = useState<RampComponent[]>([]);

  const handleComponentSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedComponent = e.target.value;
    if (selectedComponent !== 'Select a component') {
      const existingComponent = components.find(comp => comp.name === selectedComponent);
      if (existingComponent) {
        updateQuantity(existingComponent.id, 1);
      } else {
        const newComponent: RampComponent = {
          id: Date.now().toString(),
          name: selectedComponent,
          quantity: 1,
          price: 0,
        };
        const updatedComponents = [...components, newComponent];
        setComponents(updatedComponents);
        onConfigurationChange(updatedComponents);
      }
      e.target.value = 'Select a component'; // Reset dropdown to default option
    }
  };

  const updateQuantity = (id: string, change: number) => {
    const updatedComponents = components.map(component => 
      component.id === id ? { ...component, quantity: Math.max(0, component.quantity + change) } : component
    ).filter(component => component.quantity > 0);
    setComponents(updatedComponents);
    onConfigurationChange(updatedComponents);
  };

  const removeComponent = (id: string) => {
    const updatedComponents = components.filter(component => component.id !== id);
    setComponents(updatedComponents);
    onConfigurationChange(updatedComponents);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h2 className="text-xl font-bold mb-4">Ramp Configuration</h2>
      
      <div className="mb-4">
        <select 
          onChange={handleComponentSelect}
          className="w-full p-2 border rounded"
          defaultValue="Select a component"
        >
          {componentTypes.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>

      {components.length > 0 && (
        <div>
          <h3 className="font-bold mb-2">Selected Components:</h3>
          <ul>
            {components.map((component) => (
              <li key={component.id} className="flex items-center justify-between mb-2">
                <span>{component.name}</span>
                <div className="flex items-center">
                  <button 
                    type="button"
                    onClick={() => updateQuantity(component.id, -1)}
                    className="bg-gray-200 px-2 py-1 rounded-l hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span className="px-2">{component.quantity}</span>
                  <button 
                    type="button"
                    onClick={() => updateQuantity(component.id, 1)}
                    className="bg-gray-200 px-2 py-1 rounded-r hover:bg-gray-300"
                  >
                    +
                  </button>
                  <button 
                    type="button"
                    onClick={() => removeComponent(component.id)}
                    className="ml-2 text-red-500 hover:text-red-700"
                  >
                    ×
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default RampConfigurationV2;