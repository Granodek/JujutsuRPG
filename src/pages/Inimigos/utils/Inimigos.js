const inimigos = {
  Inimigo: {
    name: 'Inimigo',
    level: 4,
    grade: 'Grade 1',
    effects: [],
    stats: {
      hp: 1000,
        shield:500,
        energy: 1000,
        stamina: 25,
        panic: 0,
        Chaos: 0,
        DarkHp:0,
    },
    maxStats: {
      hp: 1000,
        shield:1000,
        energy: 1000,
        stamina: 25,
        panic: 20,
        Chaos:100,
        DarkHp: 1,
    },
    inventory: [
      
    ],
    equipment: {
      
    }
  },
};

export const inimigosLista = Object.values(inimigos);
export default inimigos;
