// credit to odin

import { Dacia } from "../../Utils";
import RenderLib from "../../../RenderLib";

boxesToRender = {
    blue: true,
    purple: true,
    green: true,
    red: true,
    orange: true,
}

const boxRegster = register("renderWorld", () => {
    if (boxestoRender.blue) RenderLib.drawEspBox(84, 16 , 95, 25, 10, 0, 170/255, 170/255,1, false);
    if (boxestoRender.purple) RenderLib.drawEspBox(57, 13, 125, 23, 10, 170/255, 0, 170/255,1, false);
    if (boxestoRender.green) RenderLib.drawEspBox(22, 8, 95, 32, 20, 85/255, 255/255, 85/255,1, false);
    if (boxestoRender.red) RenderLib.drawEspBox(27, 13, 58, 25, 15, 255/255, 85/255, 85/255,1, false);
    if (boxestoRender.orange) RenderLib.drawEspBox(87, 8, 62, 28, 20, 255/255, 170/255, 0,1, false);
})