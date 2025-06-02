let ticks = 0;
let invince = ""

register("tick", () => {
    --ticks;
    if (ticks <= 0) {
        ticks = 60
    }
})

register("chat", (message) => {
    if (message === "bonzo mask used") {
        invince = bonzo;
        ticks = 60;
    }
}).setCriteria("${message}")

const invinceOverlay = register("renderOverlay", () => {
    Renderer.drawStringWithShadow(`${invince}: ${ticks}`);
}).unregister();