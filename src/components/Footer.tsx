import React from 'react';
import { Heart, Flower2 } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-green-800 via-green-700 to-green-800 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Onam description in Malayalam */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Flower2 className="w-6 h-6 text-yellow-400" />
            <h3 className="text-xl md:text-2xl font-bold text-yellow-400">
              ഓണത്തിന്റെ പ്രാധാന്യം
            </h3>
            <Flower2 className="w-6 h-6 text-yellow-400" />
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <p className="text-sm md:text-base leading-relaxed mb-4">
              ഓണം കേരളത്തിന്റെ ഏറ്റവും പ്രധാനപ്പെട്ട ഉത്സവമാണ്. മഹാബലി ചക്രവർത്തിയുടെ 
              വാർഷിക വരവിനെ സ്മരിക്കുന്ന ഈ പർവ്വം സമൃദ്ധിയുടെയും ഐക്യത്തിന്റെയും 
              പ്രതീകമാണ്. ഓണസദ്യ ഈ ആഘോഷത്തിന്റെ ഹൃദയഭാഗമാണ്.
            </p>
            <p className="text-xs md:text-sm text-green-200">
              Onam is Kerala's most important festival, celebrating the annual visit of Emperor Mahabali. 
              This festival symbolizes prosperity and unity, with the Onam Sadya being the heart of the celebration.
            </p>
          </div>
        </div>

        {/* Cultural elements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-3 bg-yellow-400 rounded-full flex items-center justify-center">
              <span className="text-2xl">🌺</span>
            </div>
            <h4 className="font-semibold mb-2">പൂക്കളം</h4>
            <p className="text-sm text-green-200">Pookalam - Floral carpet welcoming King Mahabali</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-3 bg-yellow-400 rounded-full flex items-center justify-center">
              <span className="text-2xl">👑</span>
            </div>
            <h4 className="font-semibold mb-2">മാവേലി</h4>
            <p className="text-sm text-green-200">Maveli - The beloved king who returns during Onam</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-3 bg-yellow-400 rounded-full flex items-center justify-center">
              <span className="text-2xl">🎭</span>
            </div>
            <h4 className="font-semibold mb-2">ഊഞ്ഞാൽ</h4>
            <p className="text-sm text-green-200">Onjal - Traditional swing symbolizing joy and celebration</p>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="text-center pt-6 border-t border-white/20">
          <p className="text-sm text-green-200 flex items-center justify-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-400 fill-current" /> for preserving Kerala's rich cultural heritage
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;