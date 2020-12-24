Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Fire1, Kitronik_Game_Controller.ControllerButtonEvents.Down, function () {
    basic.showString("F")
    radio.sendValue("forward", 1)
})
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Fire2, Kitronik_Game_Controller.ControllerButtonEvents.Down, function () {
    basic.showString("B")
    radio.sendValue("backward", 1)
})
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Up, Kitronik_Game_Controller.ControllerButtonEvents.Click, function () {
    basic.showIcon(IconNames.Skull)
    boost_level += 1
    Kitronik_Game_Controller.runMotor(100)
    if (boost_level > 4) {
        boost_level = 1
    }
    radio.sendValue("boost", boost_level)
    basic.showNumber(boost_level)
})
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Right, Kitronik_Game_Controller.ControllerButtonEvents.Up, function () {
    basic.clearScreen()
    radio.sendValue("right", 0)
})
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Down, Kitronik_Game_Controller.ControllerButtonEvents.Click, function () {
    basic.showIcon(IconNames.No)
    radio.sendValue("stop", 1)
})
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Left, Kitronik_Game_Controller.ControllerButtonEvents.Up, function () {
    basic.clearScreen()
    radio.sendValue("left", 0)
})
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Fire2, Kitronik_Game_Controller.ControllerButtonEvents.Up, function () {
    basic.clearScreen()
    radio.sendValue("backward", 0)
})
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Fire1, Kitronik_Game_Controller.ControllerButtonEvents.Up, function () {
    basic.clearScreen()
    radio.sendValue("forward", 0)
})
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Right, Kitronik_Game_Controller.ControllerButtonEvents.Down, function () {
    basic.showString("R")
    radio.sendValue("right", 1)
})
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Left, Kitronik_Game_Controller.ControllerButtonEvents.Down, function () {
    basic.showString("L")
    radio.sendValue("left", 1)
})
let boost_level = 0
let radio_group = 1
radio.setGroup(radio_group)
basic.showNumber(radio_group)
boost_level = 1
basic.forever(function () {
	
})
