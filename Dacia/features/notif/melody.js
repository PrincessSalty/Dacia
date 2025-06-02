const melodyMessages = ["Melody", "melody", "meowlody", "worst terminal", "dt term"]

register("chat", (rank, name, message) => {
    if (melodyMessages.includes(message)) {
        melodyOverlay.register();
        setTimeout(melodyOverlay.unregister(), 5000);
    }
}).setCriteria("Party > ${rank} ${name}: ${message}");

const melodyOverlay = register("renderOverlay", () => {
    Renderer.drawStringWithShadow(`&e${name} has melody`);
}).unregister();