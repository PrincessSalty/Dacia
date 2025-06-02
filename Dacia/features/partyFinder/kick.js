import { Dacia } from "../../Utils";

let playerToKick = "";

register("chat", (name) => {
    playerToKick = name;
}).setCriteria("${name}")

register("command", (...args) => {
    const reason = args[0]?.toLowerCase();
    ChatLib.command(`p kick ${playerToKick}`);
    if (reason == "") {
        ChatLib.chat(`${Dacia} &fkicked &9${playerToKick}`);
    } else {
        ChatLib.chat(`${Dacia} &fkicked &9${playerToKick} &freason: ${reason}`);
        // watchout Andrew
    }
}).setName("dckick")
