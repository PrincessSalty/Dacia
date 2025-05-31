import { Dacia } from "../../Utils";
import { data } from "../../Data";

let armorNames = data.armorNames

register("guiKey", (x, keyCode, gui, event) => {
	const container = Player.getContainer().getName().removeFormatting();
	const containerInt = Player.getContainer();
 	if (container == "Wardrobe (1/2)") {
		if (keyCode == 2) {
			containerInt.click(36);
			ChatLib.chat(`${Dacia} &fequipped &9${armorNames[0]}`);
		}
		if (keyCode == 3) {
			containerInt.click(37);
			ChatLib.chat(`${Dacia} &fequipped &9${armorNames[1]}`);
		}
		if (keyCode == 4) {
			containerInt.click(38);
			ChatLib.chat(`${Dacia} &fequipped &9${armorNames[2]}`);
		}
		if (keyCode == 5) {
			containerInt.click(39);
			ChatLib.chat(`${Dacia} &fequipped &9${armorNames[3]}`);
		}
		if (keyCode == 6) {
			containerInt.click(40);
			ChatLib.chat(`${Dacia} &fequipped &9${armorNames[4]}`);
		}
		if (keyCode == 7) {
			containerInt.click(41);
			ChatLib.chat(`${Dacia} &fequipped &9${armorNames[5]}`);
		}
		if (keyCode == 8) {
			containerInt.click(42);
			ChatLib.chat(`${Dacia} &fequipped &9${armorNames[6]}`);
		}
		if (keyCode == 9) {
			containerInt.click(43);
			ChatLib.chat(`${Dacia} &fequipped &9${armorNames[7]}`);
		}
	}
})

register("command", (...args) => {
    const subCommand = args[0]?.toLowerCase();
    const set = args[1]?.toLowerCase();
    const number = parseInt(args[2]);
    const armor = args.slice(3).join(" ");

    if (subCommand !== "armor" || set !== "set") {
        ChatLib.chat(`${Dacia} &cUsage: /dc armor set <1-9> <name>`);
        return;
    }

    if (isNaN(number) || number < 1 || number > 9) {
        ChatLib.chat(`${Dacia} &cSlot must be between 1-9`);
        return;
    }

    if (!armor) {
        ChatLib.chat(`${Dacia} &cArmor name cannot be empty`);
        return;
    }

    armorNames.splice(number - 1, 1, armor);
    
    ChatLib.chat(`${Dacia} &fSet armor ${number} to &9${armor}`);
    
    data.armorNames = armorNames;
    data.save();

}).setName("dc");