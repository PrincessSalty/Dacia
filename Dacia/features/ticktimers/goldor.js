let ticks = 0

register("tick", () => {
    --ticks;
    if (ticks <= 0) {
        ticks = 20;
    }
})

const goldorTick = register("renderOverlay", () => {
    Renderer.drawStringWithShadow(`&6${ticks}`, 10, 10);
}).unregister();

register("chat", (message) => {
    if (message === "[BOSS] Goldor: Who dares trespass into my domain?") {
        ticks = 20
        goldorTick.register();
    }
}).setCriteria("${message}")