const melodyMessages = ["Melody", "melody", "meowlody", "worst terminal", "dt term"]

register("chat", (rank, name, message) => {
    if (melodyMessages.includes(message)) {
        Client.showTitle("", `&e${name} has melody`)
    }
}).setCriteria("Party > ${rank} ${name}: ${message}");