import React from 'react';
import CardAgenda from './CardAgenda';

export default function DetalleAgenda() {

    const [dbAgendas, setDbAgendas] = useState();
    let agendasWithMap = [];

    async function getProducts() {
        try {
            const res = await Axios.get('/agendas');
            setDbAgendas(res.data)
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        getProducts();
    }, []);


    if (dbProducts) {
        agendasWithMap = dbAgendas.map(p => <CardAgenda key={p._id} {...p} />)
    }

    return (
        <>
            <div className="container d-flex flex-wrap p-2 mt-4">
                {productsWithMap}
            </div>
        </>
    );
}
