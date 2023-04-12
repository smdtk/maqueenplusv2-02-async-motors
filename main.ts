let direction = 0
let distance = 0
DFRobotMaqueenPlusV2.init()
/**
 * Due to faulty Async motors
 */
basic.forever(function () {
    distance = DFRobotMaqueenPlusV2.readUltrasonic(DigitalPin.P13, DigitalPin.P14)
    direction = randint(1, 2)
    if (distance < 15 && distance != 0) {
        if (direction == 1) {
            DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eLeftMotor, MyEnumDir.eBackward, 50)
            DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eRightMotor, MyEnumDir.eForward, 100)
            basic.pause(1000)
        }
        if (direction == 2) {
            DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eLeftMotor, MyEnumDir.eForward, 100)
            DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eRightMotor, MyEnumDir.eForward, 50)
            basic.pause(1000)
        }
    } else {
        DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eLeftMotor, MyEnumDir.eForward, 100)
        DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eRightMotor, MyEnumDir.eForward, 100)
    }
})
