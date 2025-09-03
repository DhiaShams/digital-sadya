import type React from "react"

const Header: React.FC = () => {
  return (
    <header
      className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 pt-16 pb-9 px-4 overflow-hidden"
      aria-labelledby="onam-title"
      role="banner"
    >
      {/* Garland strip inspired by Onam invitations */}
      <div
        className="absolute left-0 right-0 top-0 w-full z-[1] pointer-events-none"
        aria-hidden="true"
      >
        <div className="w-full px-0">
          <div className="h-12 relative">
            <div className="absolute inset-0 flex items-start justify-between w-full">
              {Array.from({ length: 40 }).map((_, i) => (
                <div key={i} className="relative flex flex-col items-center flex-1">
                  <div className="flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-orange-500"></span>
                    <span className="w-2 h-2 rotate-45 bg-green-700 rounded-[2px]"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                  </div>
                  <div className="mt-1 h-6 w-px bg-amber-400/60"></div>
                  <span className="mt-1 block w-1.5 h-1.5 rounded-full bg-red-500"></span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">

        {/* Main title */}
        <div className="mb-3">
          <h1
            id="onam-title"
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent mb-2 text-balance"
          >
            ഓണാശംസകൾ
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 font-medium">Happy Onam</p>
        </div>

        {/* Subtitle */}
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3 text-pretty">Digital Onam Sadya</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Experience the grandeur of Kerala&apos;s traditional feast through an interactive journey. Explore each dish
            to discover its ingredients, preparation, and cultural significance.
          </p>
        </div>

        {/* Interactive instruction + CTA */}
        <div className="flex items-center justify-center gap-3">
          <div
            className="bg-white/75 backdrop-blur-sm rounded-full px-5 py-2 border border-orange-200 shadow-sm"
            aria-live="polite"
          >
            <p className="text-sm md:text-base text-gray-700">
              <span className="hidden md:inline">Hover over</span>
              <span className="md:hidden">Tap on</span> any dish to learn more
            </p>
          </div>

        </div>
      </div>

    </header>
  )
}

export default Header
