const inimigos = {
  Inimigo: {
    name: 'Inimigo',
    level: 4,
    grade: 'Grade 1',
    effects: [],
    stats: {
      hp: 1000,
      energy: 1000,
      stamina: 1000,
      panic: 0,
    },
    maxStats: {
      hp: 1000,
      energy: 1000,
      stamina: 1000,
      panic: 20,
    },
    inventory: [
      
    ],
    equipment: {
      
    }
  },
};

export const inimigosLista = Object.values(inimigos);
export default inimigos;
