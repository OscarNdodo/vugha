import FeedbackForm from "./FeebackForm";

export default function Footer() {
    return (
        < footer className="bg-white border-t border-gray-100 py-20" >
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-8 h-8 bg-[#d84506] rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h2 className="text-xl font-bold text-gray-900">Vugha</h2>
                        </div>
                        <p className="text-gray-500 mb-4">Transformando dados do GitHub em insights acionáveis para desenvolvedores e equipes.</p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-[#d84506] transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-[#d84506] transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    {/* 
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Produto</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-500 hover:text-[#d84506] transition-colors">Funcionalidades</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-[#d84506] transition-colors">Preços</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-[#d84506] transition-colors">API</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-[#d84506] transition-colors">Documentação</a></li>
                        </ul>
                    </div> */}

                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Empresa</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-500 hover:text-[#d84506] transition-colors">Sobre</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-[#d84506] transition-colors">Blog</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-[#d84506] transition-colors">Carreiras</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-[#d84506] transition-colors">Contato</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Legal</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-500 hover:text-[#d84506] transition-colors">Privacidade</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-[#d84506] transition-colors">Termos</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-[#d84506] transition-colors">Segurança</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">O que voce achou?</h3>
                        <FeedbackForm />
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Vugha. Todos os direitos reservados.</p>
                    <div className="mt-4 md:mt-0 flex space-x-6">
                        <a href="#" className="text-gray-400 hover:text-gray-500 text-sm">Política de Privacidade</a>
                        <a href="#" className="text-gray-400 hover:text-gray-500 text-sm">Termos de Serviço</a>
                    </div>
                </div>
            </div>
        </footer >
    )
}