let ticks = 0;

register("tick", () => {
    --ticks;
    if (ticks <= 0) {
        ticks = 20;
    }
})

const tickOverlay = register("renderOverlay", () => {
    Renderer.drawStringWithShadow(`&6${ticks}`, 10, 10);
}).unregister();

register("chat", (message) => {
    if (message === "[BOSS] Storm: Pathetic Maxor, just like expected.") {
        ticks = 20;
        tickOverlay.register();
    } else if (message === "[BOSS] Storm: I should have known that I stood no chance.") {
        tickOverlay.unregister();
    } else if (message === "[BOSS] Storm: Ouch, that hurt!") {
        crushOverlay.register();
    }
    if (ticks <= 0) {
        ticks = 20;
        crushOverlay.unregister();
    }
}).setCriteria("${message}")

// little crush thing
const crushOverlay = register("renderOverlay", () => {
    Renderer.drawStringWithShadow(`&d${ticks}`, 20, 20);
}).unregister();