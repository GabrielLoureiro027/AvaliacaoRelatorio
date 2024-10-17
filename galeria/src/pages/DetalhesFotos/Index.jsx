// PhotoDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const items = [
  { id: 1, titulo: 'Foto 1', foto: 'https://via.placeholder.com/150', descricao: 'Descrição da Foto 1' },
  { id: 2, titulo: 'Foto 2', foto: 'https://via.placeholder.com/150', descricao: 'Descrição da Foto 2' },
  { id: 3, titulo: 'Foto 3', foto: 'https://via.placeholder.com/150', descricao: 'Descrição da Foto 3' },
];

const DetalhesFotos = () => {
  const { id } = useParams();
  const item = items.find(item => item.id === parseInt(id));

  if (!item) {
    return <div>Item não encontrado.</div>;
  }

  return (
    <div>
      <h1>{item.titulo}</h1>
      <img src={item.foto} alt={item.titulo} />
      <p>ID: {item.id}</p>
      <p>Descrição: {item.descricao}</p>
    </div>
  );
}

export default DetalhesFotos;