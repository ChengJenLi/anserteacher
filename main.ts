input.onButtonPressed(Button.A, function () {
    basic.showNumber(control.deviceSerialNumber())
})
input.onButtonPressed(Button.B, function () {
    basic.showString(control.deviceName())
})
