'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { RampComponent } from '@/types';

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

const componentPrices = {
  '4ft ramp section': 100,
  '5ft ramp section': 125,
  '6ft ramp section': 150,
  '7ft ramp section': 175,
  '8ft ramp section': 200,
  '5x4 ft landing': 250,
  '5x5 ft landing': 300,
  '5x8 ft landing': 400,
};

interface RampConfigurationV2Props {
  onConfigurationChange: (components: RampComponent[], totalLength: number) => void;
  initialComponents?: RampComponent[];
  readOnly?: boolean;
}

const RampConfigurationV2: React.FC<RampConfigurationV2Props> = ({ 
  onConfigurationChange, 
  initialComponents = [],
  readOnly = false
}) => {
  const [components, setComponents] = useState<RampComponent[]>(initialComponents);
  const [totalLength, setTotalLength] = useState(0);

  const calculateTotalLength = useCallback(() => {
    let length = 0;
    components.forEach(component => {
      const match = component.name.match(/(\d+)ft/);
      if (match) {
        length += parseInt(match[1]) * component.quantity;
      }
    });
    setTotalLength(length);
    onConfigurationChange(components, length);
  }, [components, onConfigurationChange]);

  useEffect(() => {
    calculateTotalLength();
  }, [calculateTotalLength]);

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
          price: componentPrices[selectedComponent as keyof typeof componentPrices] || 0,
        };
        const updatedComponents = [...components, newComponent];
        setComponents(updatedComponents);
        onConfigurationChange(updatedComponents, totalLength);
      }
      e.target.value = 'Select a component'; // Reset dropdown to default option
    }
  };

  const updateQuantity = (id: string, change: number) => {
    const updatedComponents = components.map(component => 
      component.id === id ? { ...component, quantity: Math.max(0, component.quantity + change) } : component
    ).filter(component => component.quantity > 0);
    setComponents(updatedComponents);
    onConfigurationChange(updatedComponents, totalLength);
  };

  const removeComponent = (id: string) => {
    const updatedComponents = components.filter(component => component.id !== id);
    setComponents(updatedComponents);
    onConfigurationChange(updatedComponents, totalLength);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h2 className="text-xl font-bold mb-4">Ramp Configuration</h2>
      
      {!readOnly && (
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
      )}

      {components.length > 0 && (
        <div>
          <h3 className="font-bold mb-2">Selected Components:</h3>
          <ul>
            {components.map((component) => (
              <li key={component.id} className="flex items-center justify-between mb-2">
                <span>{component.name} (x{component.quantity})</span>
                {!readOnly && (
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
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default RampConfigurationV2;