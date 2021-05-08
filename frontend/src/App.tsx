import React from 'react';
import NavBar from 'components/NavBar';
import Footer from 'components/Footer';
import DataTable from 'components/DataTable';
import BarChart from 'components/BarChart';
import DonutChart from 'components/DonutChart';
function App() {
    return (
        <>
            <NavBar/>
            <div className="row px-3">
            <h1 className="text-primary py-3">Dashboard de Vendas</h1>
                <div className="col-sm-6">
                    <h5 className="text-center text-secondary">Taxa de sucesso</h5>
                    <BarChart />
                </div>
                <div className="col-sm-6">
                    <h5>Todas as Vendas</h5>
                    <DonutChart />
                </div>
            </div>

            <div className="py-3">
                <h2 className="text-primary">Todas as Vendas</h2>
            </div>
            <DataTable/>
            <Footer></Footer>
        </>
    );
}

export default App;