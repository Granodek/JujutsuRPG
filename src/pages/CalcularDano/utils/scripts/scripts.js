import favorOfFateFortuneFist from "./Favor do Destino Punho da Fortuna";
import rearuFist from "./Golpe Rearu Luva";
import punhoDivergente from "./Punho Divergente";
import favorOfFateFist from "./Favor do Destino Punho";
import fallenKatana from "./Katana Caida";
import RyumaAttack from "./Ryuma Ataque";
import chicote from "./Chicote Malzahar";

import iconKatana from "../../../../assets/Ataques/Katana Caida.png"
import iconFavorOfFateFortuneFist from "../../../../assets/Ataques/Favor do Destino Punho da Fortuna.png"
import iconRearuFist from "../../../../assets/Ataques/Punho Rearu.png"
import iconPunhoDivergente from "../../../../assets/Ataques/Punho Divergente.png"
import iconFavorOfFateFist from "../../../../assets/Ataques/Favor Do Destino.png"
import iconChicoteMalzahar from "../../../../assets/Ataques/Chicote Malzahar.png"


const scripts = [
    {
        name: "Punho Divergente",
        image: iconPunhoDivergente,
        calculateDamage: punhoDivergente
    },
    {
        name: "Favor do Destino Punho da Fortuna",
        image: iconFavorOfFateFortuneFist,
        calculateDamage: favorOfFateFortuneFist
    },
    {
        name: "Favor do Destino Punho",
        image: iconFavorOfFateFist,
        calculateDamage: favorOfFateFist
    },
    {
        name: "Punho Rearu",
        image: iconRearuFist,
        calculateDamage: rearuFist
    },
    {
        name: "Fallen",
        image: iconKatana,
        calculateDamage: fallenKatana
    },
    {
        name: "Ryuma Ataque",
        image: '',
        calculateDamage: RyumaAttack
    },
    {
        name: "Chicote Malzahar",
        image: iconChicoteMalzahar,
        calculateDamage: chicote
    },
    
    
]

export default scripts;