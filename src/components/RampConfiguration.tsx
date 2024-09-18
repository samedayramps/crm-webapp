'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
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
  const [rampSectionLength, setRampSectionLength] = useState(0);
  const [totalRampLength, setTotalRampLength] = useState(0);
  const prevComponentsRef = useRef<RampComponent[]>([]);

  const calculateLengths = useCallback(() => {
    let sectionLength = 0;
    let totalLength = 0;
    components.forEach(component => {
      const match = component.name.match(/(\d+)(?:x(\d+))?\s*ft/);
      if (match) {
        const length = parseInt(match[1]);
        if (component.name.includes('landing')) {
          totalLength += length * component.quantity;
        } else {
          sectionLength += length * component.quantity;
          totalLength += length * component.quantity;
        }
      }
    });
    return { sectionLength, totalLength };
  }, [components]);

  useEffect(() => {
    const { sectionLength, totalLength } = calculateLengths();
    setRampSectionLength(sectionLength);
    setTotalRampLength(totalLength);

    if (JSON.stringify(components) !== JSON.stringify(prevComponentsRef.current)) {
      onConfigurationChange(components, totalLength);
      prevComponentsRef.current = [...components];
    }
  }, [components, calculateLengths, onConfigurationChange]);

  const handleComponentSelect = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedComponent = e.target.value;
    if (selectedComponent !== 'Select a component') {
      setComponents(prevComponents => {
        const existingComponent = prevComponents.find(comp => comp.name === selectedComponent);
        if (existingComponent) {
          return prevComponents.map(comp =>
            comp.id === existingComponent.id
              ? { ...comp, quantity: comp.quantity + 1 }
              : comp
          );
        } else {
          const newComponent: RampComponent = {
            id: Date.now().toString(),
            name: selectedComponent,
            quantity: 1,
            price: componentPrices[selectedComponent as keyof typeof componentPrices] || 0,
          };
          return [...prevComponents, newComponent];
        }
      });
      e.target.value = 'Select a component';
    }
  }, []);

  const updateQuantity = useCallback((id: string, change: number) => {
    setComponents(prevComponents => 
      prevComponents.map(component => 
        component.id === id ? { ...component, quantity: Math.max(0, component.quantity + change) } : component
      ).filter(component => component.quantity > 0)
    );
  }, []);

  const removeComponent = useCallback((id: string) => {
    setComponents(prevComponents => prevComponents.filter(component => component.id !== id));
  }, []);

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

      <div className="mt-4">
        <p><strong>Ramp Section Length:</strong> {rampSectionLength} ft</p>
        <p><strong>Total Ramp Length:</strong> {totalRampLength} ft</p>
      </div>
    </div>
  );
};

export default RampConfigurationV2;