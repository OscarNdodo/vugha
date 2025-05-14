import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FiStar, FiGitBranch, FiEye, FiFilter, FiX } from 'react-icons/fi';

export function Result() {
    const location = useLocation();
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filters, setFilters] = useState({
        language: '',
        stars: '',
        sort: 'best-match',
        order: 'desc'
    });
    const [showFilters, setShowFilters] = useState(false);

    // Busca inicial ao carregar a página
    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const query = searchParams.get('q');

        if (query) {
            fetchRepositories(query);
        }
    }, [location.search]);

    const fetchRepositories = async (query) => {
        try {
            setLoading(true);
            setError(null);

            // Construa a URL da API com os filtros
            let url = `https://api.github.com/search/repositories?q=${query}`;

            // Adicionar filtros
            if (filters.language) url += `+language:${filters.language}`;
            if (filters.stars) url += `+stars:>=${filters.stars}`;

            // Ordenação
            if (filters.sort !== 'best-match') {
                url += `&sort=${filters.sort}&order=${filters.order}`;
            }

            const response = await fetch(url);
            const data = await response.json();

            if (response.ok) {
                setRepos(data.items || []);
            } else {
                throw new Error(data.message || 'Erro ao buscar repositórios');
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters(prev => ({ ...prev, [name]: value }));
    };

    const applyFilters = () => {
        const searchParams = new URLSearchParams(location.search);
        const query = searchParams.get('q');
        fetchRepositories(query);
        setShowFilters(false);
    };

    const resetFilters = () => {
        setFilters({
            language: '',
            stars: '',
            sort: 'best-match',
            order: 'desc'
        });
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Cabeçalho e Filtros */}
                <div className="mb-8">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-2xl font-bold text-gray-900">Resultados da Busca</h1>
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50"
                        >
                            <FiFilter className="mr-2" />
                            Filtros
                        </button>
                    </div>

                    {/* Painel de Filtros (mobile/desktop) */}
                    {showFilters && (
                        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-lg font-medium">Filtrar Resultados</h2>
                                <button onClick={() => setShowFilters(false)}>
                                    <FiX className="text-gray-500" />
                                </button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                <div>
                                    <label htmlFor="language" className="block text-sm font-medium text-gray-700 mb-1">
                                        Linguagem
                                    </label>
                                    <input
                                        type="text"
                                        id="language"
                                        name="language"
                                        value={filters.language}
                                        onChange={handleFilterChange}
                                        placeholder="JavaScript, Python..."
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="stars" className="block text-sm font-medium text-gray-700 mb-1">
                                        Mínimo de Stars
                                    </label>
                                    <input
                                        type="number"
                                        id="stars"
                                        name="stars"
                                        value={filters.stars}
                                        onChange={handleFilterChange}
                                        placeholder="Ex: 100"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="sort" className="block text-sm font-medium text-gray-700 mb-1">
                                        Ordenar por
                                    </label>
                                    <select
                                        id="sort"
                                        name="sort"
                                        value={filters.sort}
                                        onChange={handleFilterChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500"
                                    >
                                        <option value="best-match">Melhor resultado</option>
                                        <option value="stars">Stars</option>
                                        <option value="forks">Forks</option>
                                        <option value="updated">Atualização</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="order" className="block text-sm font-medium text-gray-700 mb-1">
                                        Ordem
                                    </label>
                                    <select
                                        id="order"
                                        name="order"
                                        value={filters.order}
                                        onChange={handleFilterChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500"
                                    >
                                        <option value="desc">Decrescente</option>
                                        <option value="asc">Crescente</option>
                                    </select>
                                </div>
                            </div>

                            <div className="flex justify-end space-x-3 mt-6">
                                <button
                                    onClick={resetFilters}
                                    className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50"
                                >
                                    Limpar
                                </button>
                                <button
                                    onClick={applyFilters}
                                    className="px-4 py-2 bg-amber-600 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
                                >
                                    Aplicar Filtros
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Resultados */}
                {loading ? (
                    <div className="flex justify-center items-center py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
                    </div>
                ) : error ? (
                    <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <svg className="h-5 w-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="ml-3">
                                <p className="text-sm text-red-700">{error}</p>
                            </div>
                        </div>
                    </div>
                ) : repos.length > 0 ? (
                    <div className="bg-white shadow overflow-hidden sm:rounded-md">
                        <ul className="divide-y divide-gray-200">
                            {repos.map((repo) => (
                                <li key={repo.id}>
                                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="block hover:bg-gray-50">
                                        <div className="px-4 py-4 sm:px-6">
                                            <div className="flex items-center justify-between">
                                                <p className="text-sm font-medium text-amber-600 truncate">{repo.full_name}</p>
                                                <div className="ml-2 flex-shrink-0 flex">
                                                    <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                        {repo.private ? 'Privado' : 'Público'}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="mt-2 sm:flex sm:justify-between">
                                                <div className="sm:flex">
                                                    <p className="flex items-center text-sm text-gray-500">
                                                        {repo.language || 'Linguagem não especificada'}
                                                    </p>
                                                    <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                                                        <FiGitBranch className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                                                        {repo.forks_count} forks
                                                    </p>
                                                </div>
                                                <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                                                    <FiStar className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                                                    {repo.stargazers_count} stars
                                                    <span className="mx-1">·</span>
                                                    <FiEye className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                                                    {repo.watchers_count} watchers
                                                    <span className="mx-1">·</span>
                                                    Atualizado em {new Date(repo.updated_at).toLocaleDateString()}
                                                </div>
                                            </div>
                                            {repo.description && (
                                                <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                                                    {repo.description}
                                                </p>
                                            )}
                                        </div>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <svg
                            className="mx-auto h-12 w-12 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <h3 className="mt-2 text-sm font-medium text-gray-900">Nenhum repositório encontrado</h3>
                        <p className="mt-1 text-sm text-gray-500">
                            Tente ajustar seus critérios de busca ou filtros.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}