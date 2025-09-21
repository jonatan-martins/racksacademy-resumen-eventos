'use client';

import { useState, useCallback } from 'react';
import { Upload, File, X, Download, Eye } from 'lucide-react';

interface UploadedFile {
  id: string;
  name: string;
  type: 'resume' | 'mindmap';
  section: string;
  size: number;
  uploadDate: Date;
}

export default function FileUpload() {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [dragActive, setDragActive] = useState(false);
  const [selectedSection, setSelectedSection] = useState('networking');

  const eventSections = [
    { id: 'networking', name: 'Networking Inicial' },
    { id: 'ai-talk', name: 'IA: Pasado y Presente' },
    { id: 'success-stories', name: 'Casos de Éxito' },
    { id: 'academy-recap', name: 'Recapitulación Academy' },
    { id: 'awards', name: 'Entrega de Premios' },
    { id: 'closing', name: 'Cierre del Evento' }
  ];

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(Array.from(e.dataTransfer.files));
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFiles(Array.from(e.target.files));
    }
  };

  const handleFiles = (fileList: File[]) => {
    fileList.forEach((file) => {
      // TODO: Add file validation (size, type, etc.)
      const fileType = file.name.toLowerCase().includes('mapa') || file.name.toLowerCase().includes('mind') ? 'mindmap' : 'resume';
      
      const newFile: UploadedFile = {
        id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
        name: file.name,
        type: fileType,
        section: selectedSection,
        size: file.size,
        uploadDate: new Date()
      };

      setFiles(prev => [...prev, newFile]);
    });
  };

  const removeFile = (id: string) => {
    setFiles(prev => prev.filter(file => file.id !== id));
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getFilesBySection = (sectionId: string) => {
    return files.filter(file => file.section === sectionId);
  };

  return (
    <section id="recursos" className="py-20 bg-bg-100">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-bg-200/30 backdrop-blur-sm border border-primary-100/20 rounded-full px-4 py-2 mb-6">
            <Upload className="w-5 h-5 text-primary-100" />
            <span className="text-primary-100 font-medium text-sm">Recursos del Evento</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-text-100 mb-6">
            Comparte tus Notas y Mapas Mentales
          </h2>
          <p className="text-xl text-text-200 max-w-3xl mx-auto">
            Sube tus resúmenes y mapas mentales de cada sección del evento para crear una biblioteca compartida de conocimiento
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Section Selector */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-text-200 mb-4">
              Selecciona la sección del evento:
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {eventSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setSelectedSection(section.id)}
                  className={`p-3 rounded-lg border transition-all duration-200 text-sm font-medium ${
                    selectedSection === section.id
                      ? 'bg-primary-100 border-primary-100 text-white'
                      : 'bg-bg-200/30 border-bg-300/50 text-text-200 hover:bg-bg-200/50 hover:border-primary-100/30'
                  }`}
                >
                  {section.name}
                </button>
              ))}
            </div>
          </div>

          {/* Upload Area */}
          <div
            className={`relative border-2 border-dashed rounded-xl p-8 mb-8 transition-all duration-300 ${
              dragActive 
                ? 'border-primary-100 bg-primary-100/5' 
                : 'border-bg-300/50 hover:border-primary-100/50 hover:bg-bg-200/20'
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <input
              type="file"
              multiple
              onChange={handleChange}
              accept=".pdf,.doc,.docx,.txt,.png,.jpg,.jpeg,.md"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            
            <div className="text-center">
              <Upload className={`w-12 h-12 mx-auto mb-4 transition-colors duration-200 ${
                dragActive ? 'text-primary-100' : 'text-accent-100'
              }`} />
              <h3 className="text-xl font-semibold text-text-100 mb-2">
                {dragActive ? 'Suelta los archivos aquí' : 'Arrastra archivos aquí'}
              </h3>
              <p className="text-text-200 mb-4">
                o haz clic para seleccionar archivos
              </p>
              <div className="flex items-center justify-center space-x-4 text-sm text-text-200">
                <span>PDF, DOC, TXT, MD</span>
                <span>•</span>
                <span>Imágenes PNG, JPG</span>
                <span>•</span>
                <span>Max 10MB</span>
              </div>
            </div>
          </div>

          {/* File Type Selector */}
          <div className="flex justify-center mb-8">
            <div className="bg-bg-200/30 backdrop-blur-sm border border-bg-300/50 rounded-lg p-1">
              <button
                className="px-6 py-2 rounded-md text-sm font-medium bg-primary-100 text-white transition-colors duration-200"
              >
                Auto-detectar tipo
              </button>
            </div>
          </div>

          {/* Uploaded Files by Section */}
          <div className="space-y-8">
            {eventSections.map((section) => {
              const sectionFiles = getFilesBySection(section.id);
              if (sectionFiles.length === 0) return null;

              return (
                <div key={section.id} className="bg-bg-200/30 backdrop-blur-sm border border-bg-300/50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-text-100 mb-4 flex items-center">
                    <File className="w-5 h-5 mr-2 text-primary-100" />
                    {section.name}
                    <span className="ml-2 bg-primary-100/20 text-primary-100 px-2 py-1 rounded-full text-xs">
                      {sectionFiles.length}
                    </span>
                  </h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {sectionFiles.map((file) => (
                      <div
                        key={file.id}
                        className="flex items-center justify-between p-4 bg-bg-300/30 rounded-lg border border-bg-300/30"
                      >
                        <div className="flex items-center space-x-3 flex-1 min-w-0">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            file.type === 'mindmap' 
                              ? 'bg-blue-500/20 text-blue-400' 
                              : 'bg-green-500/20 text-green-400'
                          }`}>
                            <File className="w-5 h-5" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-text-100 font-medium text-sm truncate">
                              {file.name}
                            </p>
                            <p className="text-text-200 text-xs">
                              {file.type === 'mindmap' ? 'Mapa Mental' : 'Resumen'} • {formatFileSize(file.size)}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2 ml-4">
                          {/* TODO: Add preview and download functionality */}
                          <button className="w-8 h-8 bg-bg-300/50 hover:bg-primary-100 rounded-full flex items-center justify-center transition-colors duration-200 group">
                            <Eye className="w-4 h-4 text-text-200 group-hover:text-white" />
                          </button>
                          <button className="w-8 h-8 bg-bg-300/50 hover:bg-primary-100 rounded-full flex items-center justify-center transition-colors duration-200 group">
                            <Download className="w-4 h-4 text-text-200 group-hover:text-white" />
                          </button>
                          <button
                            onClick={() => removeFile(file.id)}
                            className="w-8 h-8 bg-bg-300/50 hover:bg-red-500 rounded-full flex items-center justify-center transition-colors duration-200 group"
                          >
                            <X className="w-4 h-4 text-text-200 group-hover:text-white" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* FIXME: Add real file upload to server/cloud storage */}
          {files.length === 0 && (
            <div className="text-center py-12">
              <File className="w-12 h-12 text-accent-100 mx-auto mb-4" />
              <p className="text-text-200">
                Aún no has subido ningún archivo. ¡Comparte tus notas para ayudar a la comunidad!
              </p>
            </div>
          )}

          {/* Guidelines */}
          <div className="mt-12 bg-bg-200/20 backdrop-blur-sm border border-bg-300/30 rounded-xl p-6">
            <h4 className="font-semibold text-text-100 mb-4">Pautas para compartir recursos:</h4>
            <ul className="space-y-2 text-text-200 text-sm">
              <li>• Los resúmenes deben ser claros y concisos</li>
              <li>• Los mapas mentales pueden incluir imágenes y diagramas</li>
              <li>• Asegúrate de seleccionar la sección correcta del evento</li>
              <li>• Los archivos se compartirán con toda la comunidad</li>
              <li>• Respeta los derechos de autor y la propiedad intelectual</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}