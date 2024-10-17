// Gallery.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const items = [
  { id: 1, titulo: 'Foto 1', foto: 'https://via.placeholder.com/150', descricao: 'Descrição da Foto 1' },
  { id: 2, titulo: 'Foto 2', foto: 'https://via.placeholder.com/150', descricao: 'Descrição da Foto 2' },
  { id: 3, titulo: 'Foto 3', foto: 'https://via.placeholder.com/150', descricao: 'Descrição da Foto 3' },
  { id: 4, titulo: 'Foto 4', foto: 'https://via.placeholder.com/150', descricao: 'Descrição da Foto 3' },
  { id: 5, titulo: 'Foto 5', foto: 'https://via.placeholder.com/150', descricao: 'Descrição da Foto 3' },
  { id: 6, titulo: 'Foto 6', foto: 'https://via.placeholder.com/150', descricao: 'Descrição da Foto 3' },
  { id: 7, titulo: 'Foto 7', foto: 'https://via.placeholder.com/150', descricao: 'Descrição da Foto 3' },
  { id: 8, titulo: 'Foto 8', foto: 'https://via.placeholder.com/150', descricao: 'Descrição da Foto 3' },
  { id: 9, titulo: 'Foto 9', foto: 'https://via.placeholder.com/150', descricao: 'Descrição da Foto 3' },
];

const Home = () => {
  return (
    <div>
      <h1>Galeria de Fotos</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <Link to={`/DetalhesFotos/${item.id}`}>
              <img src={item.foto} alt={item.titulo} />
              <h2>{item.titulo}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
