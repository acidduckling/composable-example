const featureSet = {
  crouch() {
    console.log(`${this.name} crouched`);
  },
  jump() {
    console.log(`${this.name} jumped`);
  }
};

class Robot {
  /**
   * @param {string} name
   */
  constructor(name) {
    this.name = name;
  }
}

/**
 * @param {string[]} featureNames
 */
function composeRobot(...featureNames) {
  console.log(featureNames);
  class ComposedRobot extends Robot {
    
  }

  for (const featureName of featureNames) {
    ComposedRobot.prototype[featureName] = featureSet[featureName];
  }

  return ComposedRobot;
}

const AgileRobot = composeRobot('jump', 'crouch');

const robert = new AgileRobot('Robert');
robert.jump();
robert.crouch();
