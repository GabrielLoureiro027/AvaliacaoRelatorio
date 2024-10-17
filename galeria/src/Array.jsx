import React from "react";

export default function Array() {
  const items = [
    {
      id: 1,
      titulo: Foda - se1,
      foto: "/img/#vasco  #wallpaper",
      descricao: "Descrição do item 1",
    },
    {
      id: 2,
      titulo: Foda - se2,
      foto: "/img/#vasco  #wallpaper",
      descricao: "Descrição do item 2",
    },
    {
      id: 3,
      titulo: Foda - se3,
      foto: "/img/#vasco  #wallpaper",
      descricao: "Descrição do item 3",
    },
  ];

  return (
    <div>
      <h1>Galeria</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id} onClick={() => handleItemClick(item)}>
            <h2>{item.titulo}</h2>
            <img src={item.foto} alt={`Item ${item.id}`} />
          </li>
        ))}
      </ul>

      {selectedItem && (
        <div>
          <h2>Detalhes do Item</h2>
          <img src={selectedItem.foto} alt={`Item ${selectedItem.id}`} />
          <p>Título: {selectedItem.titulo}</p>
          <p>Descrição: {selectedItem.descricao}</p>
        </div>
      )}
    </div>
  );
}
