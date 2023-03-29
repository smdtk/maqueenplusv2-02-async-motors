let direction = 0
let distance = 0
DFRobotMaqueenPlusV2.init()
basic.forever(function () {
    distance = DFRobotMaqueenPlusV2.readUltrasonic(DigitalPin.P13, DigitalPin.P14)
    direction = randint(1, 2)
    if (distance < 30 && distance != 0) {
        if (direction == 1) {
            DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eLeftMotor, MyEnumDir.eForward, 10)
            DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eRightMotor, MyEnumDir.eForward, 100)
            basic.pause(1000)
        }
        if (direction == 2) {
            DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eLeftMotor, MyEnumDir.eForward, 100)
            DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eRightMotor, MyEnumDir.eForward, 10)
            basic.pause(1000)
        }
    } else {
        DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eLeftMotor, MyEnumDir.eForward, 100)
        DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eRightMotor, MyEnumDir.eForward, 95)
    }
})
