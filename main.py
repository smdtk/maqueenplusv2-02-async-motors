direction = 0
distance = 0
DFRobotMaqueenPlusV2.init()

def on_forever():
    global distance, direction
    distance = DFRobotMaqueenPlusV2.read_ultrasonic(DigitalPin.P13, DigitalPin.P14)
    direction = randint(1, 2)
    if distance < 15 and distance != 0:
        if direction == 1:
            DFRobotMaqueenPlusV2.control_motor(MyEnumMotor.E_LEFT_MOTOR, MyEnumDir.E_FORWARD, 10)
            DFRobotMaqueenPlusV2.control_motor(MyEnumMotor.E_RIGHT_MOTOR, MyEnumDir.E_FORWARD, 100)
            basic.pause(1000)
        if direction == 2:
            DFRobotMaqueenPlusV2.control_motor(MyEnumMotor.E_LEFT_MOTOR, MyEnumDir.E_FORWARD, 100)
            DFRobotMaqueenPlusV2.control_motor(MyEnumMotor.E_RIGHT_MOTOR, MyEnumDir.E_FORWARD, 10)
            basic.pause(1000)
    else:
        DFRobotMaqueenPlusV2.control_motor(MyEnumMotor.E_LEFT_MOTOR, MyEnumDir.E_FORWARD, 100)
        DFRobotMaqueenPlusV2.control_motor(MyEnumMotor.E_RIGHT_MOTOR, MyEnumDir.E_FORWARD, 95)
basic.forever(on_forever)
