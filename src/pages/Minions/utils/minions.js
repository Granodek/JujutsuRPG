import imgGragas from "../../../assets/Minions/Gragas.jpg"
import imgKian from "../../../assets/Minions/Kian.png"
import imgTanka from "../../../assets/Minions/Tanka.png"
import imgDenki from "../../../assets/Minions/Denki.png"
import imgKyodai from "../../../assets/Minions/Kyodai.png"
import imgEnrico from "../../../assets/Minions/Enrico.png"
import imgKizuna from "../../../assets/Minions/Kizuna.png"
import imgMystery from "../../../assets/Minions/Mystery.png"
import imgMystery2 from "../../../assets/Minions/Mystery.png"

const minions = {
    Gragas: {
      name: 'Gragas',
      image: imgGragas,
      level: '?',
      grade: 'Grade 1',
      effects: [],
      stats: {
        hp: 850,
        shield:0,
        energy: 600,
        stamina: 20,
        panic: 0,
        Chaos: 0,
        DarkHp:0,
      },
      maxStats: {
        hp: 850,
        shield:850,
        energy: 600,
        stamina: 20,
        panic: 20,
        Chaos:100,
        DarkHp: 1,
      },
      inventory: [
        { name: '', quantity: 0, effect:"" },
      ],
      equipment: {
        BARRIL: { name: 'Barril', grade: "1", effect: "Skills"},
        },
  },
  Tanka: {
      name: 'Tanka',
      image: imgTanka,
      level: '?',
      grade: 'Grade Semi 1',
      effects: [],
      stats: {
        hp: 1200,
        shield:0,
        energy: 400,
        stamina: 15,
        panic: 0,
        Chaos:0,
      },
      maxStats: {
        hp: 1200,
        shield:1200,
        energy: 400,
        stamina: 15,
        panic: 20,
        Chaos:100,
      },
      inventory: [
        { name: '', quantity: 0, effect:"" },
      ],
      equipment: {
        
        },
  },
  Denki: {
      name: 'Denki Musubi',
      image: imgDenki,
      level: '?',
      grade: 'Grade Semi 1',
      effects: [],
      stats: {
        hp: 600,
        shield:0,
        energy: 0,
        stamina: 9,
        panic: 0,
        Chaos: 1,
      },
      maxStats: {
        hp: 600,
        shield:600,
        energy: 1000,
        stamina: 9,
        panic: 20,
        Chaos:100,
      },
      inventory: [
        { name: '', quantity: 0, effect:"" },
      ],
      equipment: {
        
        },
  },
  Kyodai: {
      name: 'Kyodai',
      image: imgKyodai,
      level: '?',
      grade: 'Grade 1',
      effects: [],
      stats: {
        hp: 900,
        shield:0,
        energy: 100,
        stamina: 30,
        panic: 0,
        Chaos: 0,
      },
      maxStats: {
        hp: 900,
        shield: 900,
        energy: 100,
        stamina: 30,
        panic: 20,
        Chaos:100,
      },
      inventory: [
        { name: '', quantity: 0, effect:"" },
      ],
      equipment: {
        
        },
  },
  Kian: {
      name: 'Kian',
      image: imgKian,
      level: '?',
      grade: 'Special Grade',
      effects: [],
      stats: {
        hp: 1300,
        shield:0,
        energy: 800,
        stamina: 15,
        panic: 0,
        Chaos: 20,
      },
      maxStats: {
        hp: 1300,
        shield: 1300,
        energy: 800,
        stamina: 15,
        panic: 20,
        Chaos:100,
      },
      inventory: [
        { name: '', quantity: 0, effect:"" },
      ],
      equipment: {
        
        },
  },
  Enrico: {
      name: 'Enrico',
      image: imgEnrico,
      level: '?',
      grade: 'Grade 1',
      effects: [],
      stats: {
        hp: 601,
        shield:0,
        energy: 757,
        stamina: 17.3,
        panic: 0,
        Chaos: 2,
      },
      maxStats: {
        hp: 601,
        shield: 601,
        energy: 757,
        stamina: 17.3,
        panic: 20,
        Chaos:100,
      },
      inventory: [
        { name: '', quantity: 0, effect:"" },
      ],
      equipment: {
        
        },
  },
  Kizuna: {
      name: 'Yurei no Kizuna',
      image: imgKizuna,
      level: '?',
      grade: 'Grade 1',
      effects: [],
      stats: {
        hp: 1000,
        shield:0,
        energy: 1000,
        stamina: 14,
        panic: 0,
        Chaos: 0,
      },
      maxStats: {
        hp: 1000,
        shield: 1000,
        energy: 1000,
        stamina: 14,
        panic: 20,
        Chaos:100,
      },
      inventory: [
        { name: '', quantity: 0, effect:"" },
      ],
      equipment: {
        
        },
  },
  Mystery: {
      name: '???',
      image: imgMystery,
      level: '?',
      grade: 'Grade Semi 1',
      effects: [],
      stats: {
        hp: 500,
        shield:0,
        energy: 800,
        stamina: 10,
        panic: 0,
        Chaos: 0,
      },
      maxStats: {
        hp: 500,
        shield: 500,
        energy: 800,
        stamina: 10,
        panic: 20,
        Chaos:100,
      },
      inventory: [
        { name: '', quantity: 0, effect:"" },
      ],
      equipment: {
        
        },
  },
  MysteryWoman: {
      name: '???👩',
      image: imgMystery2,
      level: '?',
      grade: 'Grade 1',
      effects: [],
      stats: {
        hp: 800,
        shield:0,
        energy: 800,
        stamina: 20,
        panic: 0,
        Chaos: 5,
      },
      maxStats: {
        hp: 800,
        shield: 800,
        energy: 800,
        stamina: 20,
        panic: 20,
        Chaos:100,
      },
      inventory: [
        { name: '', quantity: 0, effect:"" },
      ],
      equipment: {
        
        },
  },
  
  
};
  
  export default minions;  
  