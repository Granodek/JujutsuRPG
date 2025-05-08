import imgGragas from "../../../assets/Minions/Gragas.jpg"


const minions = {
    MINIONS: {
      name: 'Gragas',
      image: imgGragas,
      level: 4,
      grade: 'Grade 1',
      effects: [],
      stats: {
        hp: 666,
        energy: 666,
        stamina: 666,
        panic: 0,
      },
      maxStats: {
        hp: 666,
        energy: 666,
        stamina: 666,
        panic: 20,
      },
      inventory: [
        { name: '', quantity: 0, effect:"" },
      ],
      equipment: {
        BARRIL: { name: 'Barril', grade: "1", effect: "Skills"},
        },
  },
  
};
  
  export default minions;  
  