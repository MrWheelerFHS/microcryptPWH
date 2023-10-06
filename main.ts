function encrypt () {
    if (letter < 0) {
        letter = letter + 26
    } else {
        if (letter > 25) {
            letter = letter - 26
        }
    }
    basic.showString(alphabet.charAt(letter))
}
input.onButtonPressed(Button.A, function () {
    letter += -1
    encrypt()
})
input.onButtonPressed(Button.B, function () {
    letter += 1
    encrypt()
})
input.onGesture(Gesture.Shake, function () {
    letter = letter + shift
    encrypt()
})
let shift = 0
let letter = 0
let alphabet = ""
alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
letter = 0
shift = 5
encrypt()
