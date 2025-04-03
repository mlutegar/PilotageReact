import React, { createContext, useState, useEffect } from "react";

const RelatorioContext = createContext();

const RelatorioProvider = ({ children }) => {
    const [relatorios, setRelatorios] = useState([]);
    const [loading, setLoading] = useState(true);
    // const [loading, setLoading] = useState(false);

    const fetchRelatorios = async () => {
        const storedData = localStorage.getItem('relatorios');
        const storedTime = localStorage.getItem('relatoriosTimestamp');
        const currentTime = new Date().getTime();

        if (storedData && storedTime && currentTime - storedTime < 604800000) {  // 1 semana em milissegundos
            setRelatorios(JSON.parse(storedData));
            setLoading(false);
        } else {
            try {
                const response = await fetch('https://api.pilotage.com.br/api/teste.php');
                const data = await response.json();
                setRelatorios(data);
                localStorage.setItem('relatorios', JSON.stringify(data));
                localStorage.setItem('relatoriosTimestamp', currentTime.toString());
                setLoading(false);
            } catch (error) {
                console.error('Erro ao buscar os relatórios:', error);
            }
        }
    };

    useEffect(() => {
        fetchRelatorios();
    }, []);

    return (
        <RelatorioContext.Provider value={{ relatorios, loading }}>
            {children}
        </RelatorioContext.Provider>
    );
};

export { RelatorioProvider, RelatorioContext };