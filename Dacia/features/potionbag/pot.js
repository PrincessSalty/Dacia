let opend = false

register("chat", () => {
    ChatLib.command(`pb`)
    opend = true
}).setCriteria("Starting in 4 seconds.")

register("guiOpened", (event) => {
    let container = Player.getContainer().getName().removeFormatting();
    let containerInt = Player.getContainer();
    if (container == "Potion Bag") {
        Client.scheduleTask(20, containerInt.click(1, true));
    }
    opend = false
})