import React from 'react';
import { Image, FileText, Sparkles, ArrowRight } from 'lucide-react';

interface ImageTypeSelectorProps {
  selectedType: 'blog' | 'infographic' | null;
  onTypeSelect: (type: 'blog' | 'infographic') => void;
}

export const ImageTypeSelector: React.FC<ImageTypeSelectorProps> = ({
  selectedType,
  onTypeSelect,
}) => {
  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center">
      <div className="space-y-8 max-w-6xl mx-auto">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Choose Your Creative Vision
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Select the type of image you want to generate and let AI transform your ideas into stunning visuals
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 px-4">
          <div
            className={`group relative overflow-hidden rounded-3xl p-8 cursor-pointer transition-all duration-700 transform hover:scale-[1.02] backdrop-blur-xl ${
              selectedType === 'blog'
                ? 'bg-white/20 border-2 border-blue-300/50 shadow-2xl shadow-blue-500/20'
                : 'bg-white/10 border-2 border-white/20 hover:border-blue-200/50 hover:shadow-xl hover:shadow-blue-500/10'
            }`}
            onClick={() => onTypeSelect('blog')}
          >
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-indigo-600/5 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            {/* Floating particles effect */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-4 left-4 w-2 h-2 bg-blue-400/30 rounded-full animate-pulse" />
              <div className="absolute top-12 right-8 w-1 h-1 bg-indigo-400/40 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
              <div className="absolute bottom-8 left-12 w-1.5 h-1.5 bg-purple-400/30 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-500 to-indigo-600 mb-8 mx-auto shadow-2xl group-hover:shadow-blue-500/50 transition-all duration-500 group-hover:scale-110">
                <FileText className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center group-hover:text-blue-700 transition-colors duration-300">
                Blog Featured Image
              </h3>
              <p className="text-gray-600 text-center mb-8 leading-relaxed text-lg">
                Create eye-catching featured images for your blog posts with custom titles and engaging visuals that capture your audience's attention
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-gray-500 group-hover:text-blue-600 transition-colors duration-300">
                  <Sparkles className="w-5 h-5 mr-4 text-blue-500" />
                  <span className="font-medium">Blog title and content integration</span>
                </div>
                <div className="flex items-center text-gray-500 group-hover:text-blue-600 transition-colors duration-300">
                  <Sparkles className="w-5 h-5 mr-4 text-blue-500" />
                  <span className="font-medium">Professional layouts and typography</span>
                </div>
                <div className="flex items-center text-gray-500 group-hover:text-blue-600 transition-colors duration-300">
                  <Sparkles className="w-5 h-5 mr-4 text-blue-500" />
                  <span className="font-medium">Social media ready formats</span>
                </div>
              </div>

              <div className="flex items-center justify-center text-blue-600 font-semibold text-lg group-hover:translate-x-2 transition-transform duration-300">
                Start Creating <ArrowRight className="w-5 h-5 ml-3" />
              </div>
            </div>
          </div>

          <div
            className={`group relative overflow-hidden rounded-3xl p-8 cursor-pointer transition-all duration-700 transform hover:scale-[1.02] backdrop-blur-xl ${
              selectedType === 'infographic'
                ? 'bg-white/20 border-2 border-purple-300/50 shadow-2xl shadow-purple-500/20'
                : 'bg-white/10 border-2 border-white/20 hover:border-purple-200/50 hover:shadow-xl hover:shadow-purple-500/10'
            }`}
            onClick={() => onTypeSelect('infographic')}
          >
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-pink-600/5 to-rose-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            {/* Floating particles effect */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-6 right-6 w-2 h-2 bg-purple-400/30 rounded-full animate-pulse" />
              <div className="absolute top-16 left-6 w-1 h-1 bg-pink-400/40 rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
              <div className="absolute bottom-12 right-12 w-1.5 h-1.5 bg-rose-400/30 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-purple-500 to-pink-600 mb-8 mx-auto shadow-2xl group-hover:shadow-purple-500/50 transition-all duration-500 group-hover:scale-110">
                <Image className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center group-hover:text-purple-700 transition-colors duration-300">
                Infographic Image
              </h3>
              <p className="text-gray-600 text-center mb-8 leading-relaxed text-lg">
                Transform your data and content into visually appealing infographics that tell compelling stories and engage your audience
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-gray-500 group-hover:text-purple-600 transition-colors duration-300">
                  <Sparkles className="w-5 h-5 mr-4 text-purple-500" />
                  <span className="font-medium">Data visualization and charts</span>
                </div>
                <div className="flex items-center text-gray-500 group-hover:text-purple-600 transition-colors duration-300">
                  <Sparkles className="w-5 h-5 mr-4 text-purple-500" />
                  <span className="font-medium">Custom graphics and illustrations</span>
                </div>
                <div className="flex items-center text-gray-500 group-hover:text-purple-600 transition-colors duration-300">
                  <Sparkles className="w-5 h-5 mr-4 text-purple-500" />
                  <span className="font-medium">Engaging layouts and flow</span>
                </div>
              </div>

              <div className="flex items-center justify-center text-purple-600 font-semibold text-lg group-hover:translate-x-2 transition-transform duration-300">
                Start Creating <ArrowRight className="w-5 h-5 ml-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};