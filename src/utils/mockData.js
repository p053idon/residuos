const mockData = {
  residuos: [
    {
      id: 1,
      tipo: 'Papel',
      descricao: 'Papel reciclável',
      quantidade: 100,
    },
    {
      id: 2,
      tipo: 'Plástico',
      descricao: 'Plástico PET',
      quantidade: 200,
    },
    {
      id: 3,
      tipo: 'Orgânico',
      descricao: 'Restos de comida',
      quantidade: 50,
    },
  ],
  geradores: [
    {
      id: 1,
      nome: 'Gerador A',
      local: 'Rua A, 123',
    },
    {
      id: 2,
      nome: 'Gerador B',
      local: 'Avenida B, 456',
    },
  ],
  movimentacoes: [
    {
      id: 1,
      geradorId: 1,
      residuoId: 1,
      data: '2025-11-18',
      quantidade: 50,
    },
    {
      id: 2,
      geradorId: 2,
      residuoId: 2,
      data: '2025-11-17',
      quantidade: 75,
    },
  ],
};

module.exports = mockData;