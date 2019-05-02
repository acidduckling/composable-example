class OldRobot {
  /**
   * @param {string} name
   */
  constructor(name) {
    this.name = name;
  }
}

class CrouchingRobot extends OldRobot {
  crouch() {
    console.log(`${this.name} crouched`);
  }
}

class JumpRobot extends OldRobot {
  jump() {
    console.log(`${this.name} jumped`);
  }
}

const jumpingRobot = new JumpRobot('Claus');
const crouchingRobot = new CrouchingRobot('Tiga');

jumpingRobot.jump();
crouchingRobot.crouch();
