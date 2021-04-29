for (let Variable_1 = 0; Variable_1 <= 24; Variable_1++) {
    for (let Variable_2 = 0; Variable_2 <= 24; Variable_2++) {
        led.plot(Variable_2 % 5, Variable_2 / 5)
        basic.pause(100)
        led.unplot(Variable_2 % 5, Variable_2 / 5)
        if (Variable_2 % 5 == (24 - Variable_1) % 5 && Variable_2 / 5 == (24 - Variable_1) / 5) {
            break;
        }
    }
    led.plot((24 - Variable_1) % 5, (24 - Variable_1) / 5)
    basic.pause(100)
}
for (let Variable_1 = 0; Variable_1 <= 24; Variable_1++) {
    for (let Variable_2 = 0; Variable_2 <= 24; Variable_2++) {
        led.unplot(Variable_2 % 5, Variable_2 / 5)
        basic.pause(100)
        led.plot(Variable_2 % 5, Variable_2 / 5)
        if (Variable_2 % 5 == (24 - Variable_1) % 5 && Variable_2 / 5 == (24 - Variable_1) / 5) {
            break;
        }
    }
    led.plot((24 - Variable_1) % 5, (24 - Variable_1) / 5)
    basic.pause(100)
}
