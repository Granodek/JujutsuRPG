import favorOfFateFortuneFist from "./Favor do Destino Punho da Fortuna";
import rearuFist from "./Golpe Rearu Luva";
import punhoDivergente from "./Punho Divergente";
import favorOfFateFist from "./Favor do Destino Punho";
import fallenKatana from "./Katana Caida";
import RyumaAttack from "./Ryuma Ataque";
import chicote from "./Chicote Malzahar";
import Adagas from "./Adaga";
import Pistola from "./Pistol";
import Doze from "./Shotgun";
import Metralha from "./MachineGun";
import cabeca from "./Cabeçada Divergente";
import chute from "./Chute Divergente";

import iconKatana from "../../../../assets/Ataques/Katana Caida.png";
import iconFavorOfFateFortuneFist from "../../../../assets/Ataques/Favor do Destino Punho da Fortuna.png";
import iconRearuFist from "../../../../assets/Ataques/Punho Rearu.png";
import iconPunhoDivergente from "../../../../assets/Ataques/Punho Divergente.png";
import iconFavorOfFateFist from "../../../../assets/Ataques/Favor Do Destino.png";
import iconChicoteMalzahar from "../../../../assets/Ataques/Chicote Malzahar.png";
import iconAdagas from "../../../../assets/Ataques/Adaguinhas.png";
import iconPistol from "../../../../assets/Ataques/Pistol.png";
import iconMachinegun from "../../../../assets/Ataques/Machinegun.png";
import iconShotgun from "../../../../assets/Ataques/Shotgun.png";

const scripts = {
  punhoDivergente: {
    name: "punho Divergente",
    image: iconPunhoDivergente,
    calculateDamage: punhoDivergente,
  },
  chuteDivergente: {
    name: "chute Divergente",
    image: iconPunhoDivergente,
    calculateDamage: chute,
  },
  cabecadaDivergente: {
    name: "cabeçada Divergente",
    image: iconPunhoDivergente,
    calculateDamage: cabeca,
  },
  Fortune: {
    name: "Favor do Destino Punho da Fortuna",
    image: iconFavorOfFateFortuneFist,
    calculateDamage: favorOfFateFortuneFist,
  },
  destiny: {
    name: "Favor do Destino Punho",
    image: iconFavorOfFateFist,
    calculateDamage: favorOfFateFist,
  },
  Rearu: {
    name: "Punho Rearu",
    image: iconRearuFist,
    calculateDamage: rearuFist,
  },
  foice: {
    name: "Foice",
    image: iconKatana,
    calculateDamage: fallenKatana,
  },
  Toji: {
    name: "Restrição Celestial",
    image: "",
    calculateDamage: RyumaAttack,
  },
  Malzahar: {
    name: "Chicote Malzahar",
    image: iconChicoteMalzahar,
    calculateDamage: chicote,
  },
  Faquinha: {
    name: "Adagas",
    image: iconAdagas,
    calculateDamage: Adagas,
  },
  TeiTeiTei: {
    name: "Pistolas",
    image: iconPistol,
    calculateDamage: Pistola,
  },
  Kabum: {
    name: "Doze",
    image: iconShotgun,
    calculateDamage: Doze,
  },
  Metranca: {
    name: "Metralhadora",
    image: iconMachinegun,
    calculateDamage: Metralha,
  },
};

export default scripts;