let compass_direction = 0
basic.forever(function () {
    compass_direction = input.compassHeading()
    if (compass_direction >= 315 || compass_direction < 45) {
        basic.showArrow(ArrowNames.North)
    } else if (compass_direction >= 45 || compass_direction < 135) {
        basic.showArrow(ArrowNames.East)
    } else if (compass_direction >= 135 || compass_direction < 225) {
        basic.showArrow(ArrowNames.South)
    } else {
        basic.showArrow(ArrowNames.West)
    }
})
