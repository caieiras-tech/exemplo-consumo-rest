import React from 'react';
import './EscolaForm.css'

const EscolaForm = () => {

    const nomeRef = React.useRef("");
    const emailRef = React.useRef("");
    const telefoneRef = React.useRef("");
    const enderecoRef = React.useRef("");
    const senhaRef = React.useRef("");

    const criaEscola = (event) => {
        event.preventDefault();

        fetch('http://localhost:8000/escolas/', {
            method: 'POST',
            body: JSON.stringify({
                nome: nomeRef.current.value,
                email: emailRef.current.value,
                telefone: telefoneRef.current.value,
                endereco: enderecoRef.current.value,
                senha: senhaRef.current.value,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(value => {
            return value.json()
        }).then(value => {
            if(value.id) {
                alert("Escola criada com sucesso!");
            }else{
                alert("Houve um erro ao criar essa escola!");
            }
            nomeRef.current.value = "";
            emailRef.current.value = "";
            telefoneRef.current.value = "";
            enderecoRef.current.value = "";
            senhaRef.current.value = "";
        })
    };

    return <div id={"form-content"}>
        <form onSubmit={criaEscola}>
            <div id={"form-title"}>Cadastrar Escola</div>
            <div id={"inputs"}>
                <div className={"labels"}>
                    <label htmlFor={"nome"}>nome</label><br/>
                    <label htmlFor={"email"}>email</label><br/>
                    <label htmlFor={"telefone"}>telefone</label><br/>
                    <label htmlFor={"endereco"}>endereco</label><br/>
                    <label htmlFor={"senha"}>senha</label><br/>
                </div>
                <div className={"fields"}>
                    <input ref={nomeRef} name={"nome"} type="text" required/><br/>
                    <input ref={emailRef} name={"email"} type="text" required/><br/>
                    <input ref={telefoneRef} name={"telefone"} type="text" required/><br/>
                    <input ref={enderecoRef} name={"endereco"} type="text" required/><br/>
                    <input ref={senhaRef} name={"senha"} type="text" required/><br/>
                </div>
            </div>

            <input type="submit" value={"Cadastrar"}/>
        </form>
    </div>

};


export default EscolaForm;