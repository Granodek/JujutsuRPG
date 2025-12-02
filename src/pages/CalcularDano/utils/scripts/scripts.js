
import rearuFist from "./Golpe Rearu Luva";
import punhoDivergente from "./Punho Divergente";
import fallenKatana from "./Katana Caida";
import RyumaAttack from "./Ryuma Ataque";
import chicote from "./Chicote Malzahar";
import Adagas from "./Adaga";
import Pistola from "./Pistol";
import Doze from "./Shotgun";
import Metralha from "./MachineGun";
import cabeca from "./Cabeçada Divergente";
import chute from "./Chute Divergente";
import punhoItadori from "./Punho Divergente Itadori";
import chuteItadori from "./Chute Divergente Itadori";
import cabecaItadori from "./Cabeçada Divergente Itadori";
import punhoCorre from "./Punho Corre";
import chuteCorre from "./Chute Corre";
import cabecaCorre from "./Cabeçada Corre";


import iconKatana from "../../../../assets/Ataques/Katana Caida.png";
import iconRearuFist from "../../../../assets/Ataques/Punho Rearu.png";
import iconPunhoDivergente from "../../../../assets/Ataques/Punho Divergente.png";
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
  punhoCorre: {
    name: "punho Divergente(Kōhī)",
    image: iconPunhoDivergente,
    calculateDamage: punhoCorre,
  },
  punhoItadori: {
    name: "punho Divergente(Itadori)",
    image: iconPunhoDivergente,
    calculateDamage: punhoItadori,
  },
  chuteDivergente: {
    name: "chute Divergente",
    image: iconPunhoDivergente,
    calculateDamage: chute,
  },
  chuteCorre: {
    name: "chute Divergente(Kōhī)",
    image: iconPunhoDivergente,
    calculateDamage: chuteCorre,
  },
  chuteItadori: {
    name: "chute Divergente(Itadori)",
    image: iconPunhoDivergente,
    calculateDamage: chuteItadori,
  },
  cabecadaDivergente: {
    name: "cabeçada Divergente",
    image: iconPunhoDivergente,
    calculateDamage: cabeca,
  },
  cabecaCorre: {
    name: "cabeçada Divergente(Kōhī)",
    image: iconPunhoDivergente,
    calculateDamage: cabecaCorre,
  },
  cabecadaItadori: {
    name: "cabeçada Divergente(Itadori)",
    image: iconPunhoDivergente,
    calculateDamage: cabecaItadori,
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
    name: "Chicote",
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