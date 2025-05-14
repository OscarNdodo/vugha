import { useState, useEffect } from 'react';
import { RepoCarousel } from './components/RepoCarosel';
import './App.css';
import { UsersSection } from './components/UsersSection';
import Footer from './components/Footer';
import { FeedbackSection } from './components/FeedbackSection';
import { AutoFeedback } from './components/AutoFeedback';

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 flex flex-col">
      {/* HEADER - Moderno e responsivo */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-3 shadow-lg bg-white/90 backdrop-blur-sm' : 'py-4 bg-transparent'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-[#d84506] rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-[#d84506] to-orange-400 bg-clip-text text-transparent">Vugha</h1>
          </div>

          <nav className="hidden md:flex space-x-8 items-center">
            <a href="#" className="text-gray-700 hover:text-[#d84506] font-medium transition-colors duration-200">Home</a>
            <a href="#" className="text-gray-700 hover:text-[#d84506] font-medium transition-colors duration-200">Sobre</a>
            <a href="#" className="text-gray-700 hover:text-[#d84506] font-medium transition-colors duration-200">Contato</a>
            <a href="#" className="hover:bg-[#d84506] hover:text-white font-medium transition-colors duration-200 border bg-white drop-shadow-sm ease-in-out  border-[#f56122] text-[#f56122] px-10 rounded-md py-1">
              <div className='flex items-center justify-between'>
                <span>Sign In</span>
                <svg className="w-4 h-4 text-[#d845060] ml-2 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </a>
          </nav>

          <button className="md:hidden text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* HERO SECTION - Com animações */}
      <main className="flex-1 flex items-center justify-center px-6 pt-32 pb-16">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="mb-8 inline-block px-4 py-2 bg-orange-100 rounded-full">
            <span className="text-xs font-semibold text-[#d84506]">PRE-LANÇAMENTO</span>
          </div>

          <h1 className="text-4xl md:text-6xl mulish-black w-full font-bold text-gray-900 leading-tight mb-6 animate-fadeIn">
            Explore repositórios GitHub <br className="hidden md:block" />
            <span className="relative">
              como na Google
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-orange-500/30"></span>
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 animate-fadeIn delay-100">
            Vugha transforma dados complexos do GitHub em insights visuais poderosos, ajudando você a entender projetos e colaborações em tempo real.
          </p>


          <div className="my-12 mt-20 max-auto w-full sm:w-10/12 mx-auto animate-fadeIn animate-fadeIn delay-200">
            <div className="flex items-center bg-white rounded-lg hover:shadow-amber-300 shadow-sm border border-gray-200 overflow-hidden">
              <input
                type="text"
                placeholder="Pesquise pelo termo...ex. dompdf"
                className="flex-1 px-5 sm:px-10 py-4 sm:py-5 focus:outline-none"
              />
              <button className="px-8 py-5 text-amber-500 opacity-70 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>


          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fadeIn delay-200 py-20">
            <button className="px-8 py-4 bg-gradient-to-r from-[#d84506] to-orange-500 text-white font-semibold rounded-lg hover:from-orange-700 hover:to-[#d84506] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Comece agora gratuitamente
            </button>
            <button className="px-8 py-4 bg-white text-[#d84506] border-2 border-orange-100 font-semibold rounded-lg hover:bg-orange-50 transition-all duration-300 shadow hover:shadow-md">
              <div className="flex items-center justify-center space-x-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Assista a demonstração</span>
              </div>
            </button>
          </div>









        </div>


      </main>

      {/* Seção de Repositórios Populares */}

      <RepoCarousel />

      {/* <UsersSection /> */}


      <AutoFeedback />

      {/* FOOTER - Mais completo */}
      <Footer />
    </div >
  );
}