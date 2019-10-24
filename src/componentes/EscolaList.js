import React from 'react';
import './EscolaList.css';

const EscolaList = () => {

    const [escolas, setEscolas] = React.useState([]);

    React.useEffect(() => carregaEscolas(), []);

    const carregaEscolas = () => {
        fetch('http://localhost:8000/escolas/', {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(value => {
            return value.json()
        }).then(value => {
            setEscolas(value)
        })
    };

    return <table>
        <thead>
        <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
        </tr>
        </thead>
        <tbody>
        {escolas.map(value => {
            return <tr key={value.id}>
                <td>{value.nome}</td>
                <td>{value.email}</td>
                <td>{value.telefone}</td>
            </tr>
        })}
        </tbody>
    </table>;
}

export default EscolaList;