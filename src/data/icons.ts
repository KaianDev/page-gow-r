import { Icon } from "@/types/Icon";

import offline from "/public/assets/offline.png";
import single from "/public/assets/single.png";
import remote from "/public/assets/remote.png";
import vibration from "/public/assets/vibration.png";
import lever from "/public/assets/lever.png";
import plus from "/public/assets/plus.png";

export const icons: Icon[] = [
    { id: 1, title: "Jogo offline habilitado", icon: offline },
    { id: 2, title: "1 Jogador", icon: single },
    { id: 3, title: "Compatível com uso remoto", icon: remote },
    { id: 4, title: "Função de vibração necessária", icon: vibration },
    { id: 5, title: "Efeito gatilho necessário", icon: lever },
    { id: 6, title: "Compatível com a ajuda do jogo", icon: plus },
];
