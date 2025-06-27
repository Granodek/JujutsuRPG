import imgRearu from "../../../assets/Personagens/RearuAmat.jpg"
import imgAmat from "../../../assets/Personagens/Amat.jpg"
import imgPrinceOfRot from "../../../assets/Personagens/Principe Podre.png"
import imgRyuma from "../../../assets/Personagens/Ryuma.png"
import imgFallenAngel from "../../../assets/Personagens/FallenAngel.png"
import imgNocturnal from "../../../assets/Personagens/imagemdocesao.png"
import imgMalzahar from "../../../assets/Personagens/Malzahar2.png"

const personagens = {
    Rearu: {
      name: 'Rearu',
      image: imgRearu,
      level: 4,
      grade: 'Grade 1',
      effects: ['Resistance +20%', 'Luck +2'],
      stats: {
        hp: 1061,
        shield:0,
        energy: 1180,
        stamina: 35,
        panic: 0,
        DarkHp:0,
      },
      maxStats: {
        hp: 1061,
        shield: 1061,
        energy: 1180,
        stamina: 35,
        panic: 20,
        DarkHp:1,
        Chaos:100,
      },
      inventory: [
        { name: 'Bandages', quantity: 1, effect:"Provides basic healing for minor injuries, reducing pain and preventing infection." },
      ],
      equipment: {
        dice: { name: 'Duo Of Fate', grade: "Grade 1", effect: "Result 6-6: 3x Status, +30% Accuracy, All negative effects removed, Immune to negative effects, Energy recharges 200% faster, 3x Energy regen, 30% max HP regen per round, skill costs reduced by 50%, can save you from a fatal blow. Result 6-?: All negative effects removed, Status increased by 50%, Energy regenerates 100% faster, Energy regen x2, and Health regenerates 15% of max HP per round. Result 5-?: Increases all of your stats by 30%, Gains double Energy. Result 4-?: Energy gained is doubled, recovers a small amount of Health. Result 3-?: Decreases Energy and Health Regen by 50%. Result 2-?: Paralyzed, No energy regeneration, and loses energy over time. Result 1-?: You Faints, All Status -30%, Poison, Bad Omen Curse. Result 1-1: Teleported to a barren plane, enduring excruciating internal pain, internal and external bleeding, followed by eternal suffering as Death tortures you endlessly. Cost: 0"},
        gloves: { name: 'Emblem Gloves', grade: "Grade 1", effect: "Rectangular Grip: Create a rectangle with your fingers on enemies to mark them. Marked Enemy: While marked, the enemy takes 30% more damage from all attacks and their damage is reduced by 15%. Runtime: 5 Rounds Cost: 0"},
        pistols: { name: 'Luck Fire & Fate Ice', grade: "Grade 1", effect: "Luck Fire: When you shoot with this pistol, it burns enemies, causing fire damage. Fate Ice: When you shoot with this pistol, it freezes the area it hits, causing ice damage. Combined Effect: If you hit a fronzen area with Luck Fire, it causes extra damage. Likewise, if you hit a burning area with Fate Ice, it also deals more damage. Total Bullets: 12" },
        mask: { name: 'Mask of Luck', grade: "Grade 1", effect: "Reflete 20% de qualquer dano crítico. Reduz o dano crítico tomado em 20%." },
        coat: { name: 'Coat of Fate', grade: "Grade 1", effect: "Reflete 30% de qualquer dano tomado. Reduz o dano tomado em RES + 20%." },
      },
  },
  Amaterasu: {
    name: 'Amaterasususu',
    image: imgAmat,
    level: 4,
    grade: 'Grade 1',
    effects: ['Resistance +20%', 'Luck +2'],
    stats: {
      hp: 2061,
      shield:0,
      energy: 2200,
      stamina: 45,
      panic: 0,
      Chaos:0,
    },
    maxStats: {
      hp: 2061,
      shield:2061,
      energy: 2200,
      stamina: 45,
      panic: 20,
      Chaos:100,
    },
    inventory: [
      { name: 'Bandages', quantity: 3, effect:"Provides basic healing for minor injuries, reducing pain and preventing infection." },
    ],
    equipment: {
      dice: { name: 'Duo Of Fate', grade: "Grade 1", effect: "Result 6-6: 3x Status, +30% Accuracy, All negative effects removed, Immune to negative effects, Energy recharges 200% faster, 3x Energy regen, 30% max HP regen per round, skill costs reduced by 50%, can save you from a fatal blow. Result 6-?: All negative effects removed, Status increased by 50%, Energy regenerates 100% faster, Energy regen x2, and Health regenerates 15% of max HP per round. Result 5-?: Increases all of your stats by 30%, Gains double Energy. Result 4-?: Energy gained is doubled, recovers a small amount of Health. Result 3-?: Decreases Energy and Health Regen by 50%. Result 2-?: Paralyzed, No energy regeneration, and loses energy over time. Result 1-?: You Faints, All Status -30%, Poison, Bad Omen Curse. Result 1-1: Teleported to a barren plane, enduring excruciating internal pain, internal and external bleeding, followed by eternal suffering as Death tortures you endlessly. Cost: 0"},
      gloves: { name: 'Emblem Gloves', grade: "Grade 1", effect: "Rectangular Grip: Create a rectangle with your fingers on enemies to mark them. Marked Enemy: While marked, the enemy takes 30% more damage from all attacks and their damage is reduced by 15%. Runtime: 5 Rounds Cost: 0"},
      pistols: { name: 'Luck Fire & Fate Ice', grade: "Grade 1", effect: "Luck Fire: When you shoot with this pistol, it burns enemies, causing fire damage. Fate Ice: When you shoot with this pistol, it freezes the area it hits, causing ice damage. Combined Effect: If you hit a fronzen area with Luck Fire, it causes extra damage. Likewise, if you hit a burning area with Fate Ice, it also deals more damage. Total Bullets: 12" },
      mask: { name: 'Mask of Luck', grade: "Grade 1", effect: "Reflete 20% de qualquer dano crítico. Reduz o dano crítico tomado em 20%." },
      coat: { name: 'Coat of Fate', grade: "Grade 1", effect: "Reflete 30% de qualquer dano tomado. Reduz o dano tomado em RES + 20%." },
    },
},
  PrinceOfRot: {
    name: 'Príncipe da Podridão',
    image: imgPrinceOfRot,
    level: 21,
    grade: 'Special Grade',
    effects: ['MORTO'],
    stats: {
      hp: 3550,
      shield: 0,
      energy: 1050,
      stamina: 520,
      panic: 0,
    },
    maxStats: {
      hp: 3550,
      shield: 1,
      energy: 1050,
      stamina: 520,
      panic: 20,
    },
    inventory: [
      { name: '', quantity: 0, effect: '' },
    ],
    equipment: {
      scythe: { name: 'Foice Podre', grade: "Special Grade", effect: "Ao atingir o alvo, aplica o efeito de deterioração."},
      fishingRod: { name: 'Vara de Pescar', grade: "Grade 1", effect: "Rouba a arma do oponente a uma distância de 100m, subjuga-o e concede o conhecimento da habilidade da arma."},
      ring: { name: 'Anel do Tempo', grade: "Special Grade", effect: "Em um raio de 10m, traz objetos e inimigos com intenções ruins e os 'reseta' para o limite dessa distância, gastando 100 de energia do usuário."},
      armor: { name: 'Armadura de Dyson', grade: "Special Grade", effect: "Cria uma esfera ao redor do usuário que o defende em 20% e causa queimadura leve no inimigo." },
      daggers: { name: 'Adagas do Cataclismo', grade: "Special Grade", effect: "Causa sangramento leve e desorientação no inimigo, pega 50% da técnica e 70% do dano físico. Cada golpe pode acertar duas vezes. Habilidade Extra: Após acertar, carrega por 3 rodadas e, ao final, realiza um ataque em área que causa dano colossal de 150% da técnica e 150% do dano físico." },
    },
  },
  Ryuma: {
    name: 'Ryuma',
    image: imgRyuma,
    level: 13,
    grade: 'Grade 1',
    effects: ['99% MORTO'],
    stats: {
      hp: 896,
      shield: 0,
      energy: 0,
      stamina: 295,
      panic: 0,
    },
    maxStats: {
      hp: 896,
      shield: 1,
      energy: 0,
      stamina: 295,
      panic: 20,
    },
    inventory: [
      { name: '', quantity: 0, effect: '' },
    ],
    equipment: {
      nothing: { name: ' ', grade: " ", effect: " "},
    },
  },
  FallenAngel: {
    name: 'Fallen Angel',
    image: imgFallenAngel,
    level: 1,
    grade: 'Special Grade',
    effects: [''],
    stats: {
      hp: 1450,
      shield: 0,
      energy: 600,
      stamina: 17,
      panic: 0,
    },
    maxStats: {
      hp: 1450,
      shield: 1,
      energy: 800,
      stamina: 17,
      panic: 20,
      Chaos:100,
    },
    inventory: [
      { name: '', quantity: 0, effect: '' },
    ],
    equipment: {
      katana: { name: 'Fallen', grade: "Special Grade", effect: "Acellerator: usando chamas azuis a embuindo, acelera seu golpe para um golpe rápido sem chance de se esquivar, e caso seja um raspão passa a ser um acerto, carrega suas chamas a cada 3 rodadas."},
    },
  },
  Nocturnal: {
    name: 'Nocturnal',
    image: imgNocturnal,
    level: 12,
    grade: 'Special Grade',
    effects: [''],
    stats: {
      hp: 3000,
      shield:0,
      energy: 1520,
      stamina: 32,
      panic: 0,
    },
    maxStats: {
      hp: 3000,
      shield:3000,
      energy: 1520,
      stamina: 32,
      panic: 20,
      Chaos:100,
    },
    inventory: [
      { name: '', quantity: 0, effect: '' },
    ],
    equipment: {
      nothing: { name: ' ', grade: " ", effect: " "},
    },
  },
  Malzahar: {
    name: 'Malzahar',
    image: imgMalzahar,
    level: 1,
    grade: 'Special Grade',
    effects: ['Mestre das Correntes: 20% Pen Res inimiga, Visão do invisivel, +++.'],
    stats: {
      hp: 1712,
      shield:0,
      energy: 1150,
      stamina: 16,
      panic: 0,
      DarkHp:0,
      Chaos:30,
    },
    maxStats: {
      hp: 1712,
      shield:1712,
      energy: 1150,
      stamina: 16,
      panic: 20,
      DarkHp:1712,
      Chaos:100,
    },
    inventory: [
      { name: ' ', quantity: 0, effect: ' ' },
    ],
    equipment: {
      Whip: { name: 'Chicote ', grade: " 1", effect: "Mestre das Correntes "},
      Sword: { name: 'Espada do contrato', grade: "Grade 2", effect: "Define contrato, se usar habilidades com ela elas saem melhor, 30% a mais de potencia, e 10% menos custo"},
    },
  },
};
  
  export default personagens;  
  