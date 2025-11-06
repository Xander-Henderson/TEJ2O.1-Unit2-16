/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Alexander
 * Created on: Nov 2025
 * This program says to a other microbit
 * if its too close to an object.
*/

// variable
let distanceToObjest: number = 0

// setup
radio.setGroup(109)
basic.clearScreen()
basic.showIcon(IconNames.Happy)

while (true) {
    // gets the distance
    distanceToObjest = sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
    )

    if (distanceToObjest < 5) {
        radio.sendString("Too Close")
    }
}

radio.onReceivedString(function (receivedString) {
    basic.clearScreen()
    basic.showString(receivedString)
    basic.showIcon(IconNames.Happy)
})