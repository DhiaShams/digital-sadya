import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-green-800 via-green-700 to-green-800 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Onam description in Malayalam */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <h3 className="text-xl md:text-2xl font-bold text-yellow-400">
              ഓണം
            </h3>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <p className="text-sm md:text-base leading-relaxed mb-4">
              ഓണം കേരളത്തിന്റെ ഏറ്റവും പ്രധാനപ്പെട്ട ഉത്സവമാണ്.
              മഹാബലി രാജാവിന്റെ തിരിച്ചുവരവിന്റെ ഓർമ്മയ്ക്കായി, ചിങ്ങമാസത്തിൽ പത്ത് ദിവസം നീണ്ടുനിൽക്കുന്ന ഒരു ആഘോഷമാണ് ഓണം. കേരളത്തിൽ ഇത് ഒരു സന്തോഷകരമായ വിളവെടുപ്പ് ഉത്സവമാണ്.
            </p>
            <p className="text-xs md:text-sm text-green-200">
              Onam is a joyous harvest festival in Kerala, celebrated for ten days in the month of Chingam, honoring the return of King Mahabali
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
            <h4 className="font-semibold mb-2">മഹാബലി</h4>
            <p className="text-sm text-green-200">Mahabali - The beloved king who returns during Onam</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-3 bg-yellow-400 rounded-full flex items-center justify-center">
              <span className="text-2xl">🎡</span>
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