'use client';

import { useState } from 'react';
import { GitBranch, Maximize2, Minimize2, Eye } from 'lucide-react';

interface MindMapNode {
  id: string;
  title: string;
  description: string;
  children?: MindMapNode[];
  level: number;
}

interface MindMap {
  id: string;
  title: string;
  speaker: string;
  rootNode: MindMapNode;
  date: string;
}

interface MindMapSectionProps {
  mindMaps: MindMap[];
}

const MindMapNodeComponent = ({ node, expandedNodes, onToggle }: {
  node: MindMapNode;
  expandedNodes: Set<string>;
  onToggle: (nodeId: string) => void;
}) => {
  const hasChildren = node.children && node.children.length > 0;
  const isExpanded = expandedNodes.has(node.id);
  
  // Define margin classes based on level
  const getMarginClass = (level: number) => {
    switch(level) {
      case 0: return '';
      case 1: return 'ml-4';
      case 2: return 'ml-8';
      case 3: return 'ml-12';
      default: return 'ml-16';
    }
  };
  
  return (
    <div className={`${getMarginClass(node.level)} mb-2`}>
      <div className="flex items-start space-x-2">
        {hasChildren && (
          <button
            onClick={() => onToggle(node.id)}
            className="mt-1 p-1 rounded-full hover:bg-bg-300 transition-colors duration-200"
          >
            {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        )}
        <div className="flex-1 bg-bg-300 rounded-lg p-3 border border-bg-400">
          <h4 className="font-semibold text-text-100 mb-1">{node.title}</h4>
          {node.description && (
            <p className="text-sm text-text-200">{node.description}</p>
          )}
        </div>
      </div>
      
      {hasChildren && isExpanded && (
        <div className="ml-6 mt-2 border-l-2 border-primary-100/30 pl-4">
          {node.children!.map((child) => (
            <MindMapNodeComponent
              key={child.id}
              node={child}
              expandedNodes={expandedNodes}
              onToggle={onToggle}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default function MindMapSection({ mindMaps }: MindMapSectionProps) {
  const [selectedMap, setSelectedMap] = useState<string | null>(mindMaps.length > 0 ? mindMaps[0].id : null);
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set());

  const toggleNode = (nodeId: string) => {
    const newExpanded = new Set(expandedNodes);
    if (newExpanded.has(nodeId)) {
      newExpanded.delete(nodeId);
    } else {
      newExpanded.add(nodeId);
    }
    setExpandedNodes(newExpanded);
  };

  const selectedMindMap = mindMaps.find(map => map.id === selectedMap);

  return (
    <section id="mapas-mentales" className="py-16 bg-bg-200">
      <div className="container-max section-padding">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-100 mb-4">
            Mapas Mentales
          </h2>
          <p className="text-lg text-text-200 max-w-2xl mx-auto">
            Visualización estructurada de los conceptos principales de cada ponencia
          </p>
        </div>

        {/* Mind Maps List */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Maps Selection */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-text-100 mb-4 flex items-center">
              <GitBranch className="w-5 h-5 mr-2 text-primary-100" />
              Seleccionar Mapa
            </h3>
            <div className="space-y-3">
              {mindMaps.map((map) => (
                <button
                  key={map.id}
                  onClick={() => setSelectedMap(map.id)}
                  className={`w-full text-left p-4 rounded-lg border transition-all duration-200 ${
                    selectedMap === map.id
                      ? 'bg-primary-100 border-primary-200 text-white'
                      : 'bg-bg-100 border-bg-300 text-text-100 hover:border-primary-100/50'
                  }`}
                >
                  <h4 className="font-semibold mb-1">{map.title}</h4>
                  <p className={`text-sm ${
                    selectedMap === map.id ? 'text-white/80' : 'text-text-200'
                  }`}>
                    Por {map.speaker}
                  </p>
                  <p className={`text-xs mt-1 ${
                    selectedMap === map.id ? 'text-white/60' : 'text-text-300'
                  }`}>
                    {map.date}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Map Visualization */}
          <div className="lg:col-span-2">
            {selectedMindMap ? (
              <div className="bg-bg-100 rounded-xl p-6 border border-bg-300">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-text-100 mb-2">
                    {selectedMindMap.title}
                  </h3>
                  <p className="text-text-200">
                    Por <span className="font-medium text-primary-100">{selectedMindMap.speaker}</span>
                  </p>
                </div>

                {/* Mind Map Tree */}
                <div className="bg-bg-200 rounded-lg p-4 max-h-96 overflow-y-auto">
                  <MindMapNodeComponent
                    node={selectedMindMap.rootNode}
                    expandedNodes={expandedNodes}
                    onToggle={toggleNode}
                  />
                </div>

                {/* Controls */}
                <div className="mt-4 flex space-x-4">
                  <button
                    onClick={() => {
                      const allNodeIds = new Set<string>();
                      const collectNodeIds = (node: MindMapNode) => {
                        allNodeIds.add(node.id);
                        node.children?.forEach(collectNodeIds);
                      };
                      collectNodeIds(selectedMindMap.rootNode);
                      setExpandedNodes(allNodeIds);
                    }}
                    className="px-4 py-2 bg-primary-100 hover:bg-primary-200 text-white rounded-lg font-medium transition-colors duration-200"
                  >
                    Expandir Todo
                  </button>
                  <button
                    onClick={() => setExpandedNodes(new Set())}
                    className="px-4 py-2 bg-bg-300 hover:bg-bg-400 text-text-100 rounded-lg font-medium transition-colors duration-200"
                  >
                    Contraer Todo
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-bg-100 rounded-xl p-12 border border-bg-300 text-center">
                <Eye className="w-16 h-16 text-text-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-text-100 mb-2">
                  Selecciona un Mapa Mental
                </h3>
                <p className="text-text-200">
                  Elige un mapa mental de la lista para visualizar su contenido
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

