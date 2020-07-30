import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  
  const valoresInicias = {
    nome: '',
    descricao: '',
    cor:'',
  }
  const [categorias, setCategoria] = useState([])
  const [values, setValues] = useState(valoresInicias)
  
  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    })
  }

  function handleChange(infosDoEvento){
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value
    )
   }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault()
        setCategoria([
          ...categorias,
          values
        ])

        setValues(valoresInicias)
      }}>
        
        <FormField
          label="Nome da Categoria"
          type="name"
          name="name"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="text"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField 
          label="Cor"
          Type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />
        
        <button>
          Cadastrar
        </button>
      </form>
          
      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>

      <Link to="/">
        Ir para o home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;