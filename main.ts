input.onButtonPressed(Button.A, function () {
    users_number_1 += 1
    basic.showString("" + (users_number_1))
})
input.onButtonPressed(Button.AB, function () {
    users_number_2 = users_number_1
    users_number_1 = 0
    basic.showString("" + (users_number_1))
})
input.onButtonPressed(Button.B, function () {
    users_number_1 += -1
    basic.showString("" + (users_number_1))
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("" + (users_number_1))
    basic.showString("" + (users_number_2))
})
let users_number_2 = 0
let users_number_1 = 0
users_number_1 = 0
users_number_2 = 0
basic.showString("" + (users_number_1))
