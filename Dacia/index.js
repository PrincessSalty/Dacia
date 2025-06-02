import "./features/wardrobe/swap";
import "./features/potionbag/pot";
import "./features/partyFinder/kick"
import "./features/notif/melody"
import "./features/notif/place"
import "./features/ticktimers/bonzoPhoenix"
import "./features/ticktimers/goldor"
import "./features/ticktimers/storm"

import Settings from "./Settings";
register("command", () => {
    Settings.openGUI();
}).setName("dc").setAliases("dacia")