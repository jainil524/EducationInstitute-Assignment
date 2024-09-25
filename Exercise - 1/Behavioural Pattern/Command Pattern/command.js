"use strict";
// Light Command Class
class LightCommand {
    isOn = false;
    execute() {
        this.isOn = true;
        console.log("Light is ON");
    }
    undo() {
        this.isOn = false;
        console.log("Light is OFF");
    }
}
// AC Command Class
class ACCommand {
    isOn = false;
    execute() {
        this.isOn = true;
        console.log("AC is ON");
    }
    undo() {
        this.isOn = false;
        console.log("AC is OFF");
    }
}
// Remote Control Class
class RemoteControl {
    lastCommand = null;
    pressButton(command) {
        command.execute();
        this.lastCommand = command;
    }
    pressUndo() {
        if (this.lastCommand) {
            this.lastCommand.undo();
        }
    }
}
// Usage Example
const remote = new RemoteControl();
const lightCommand = new LightCommand();
const acCommand = new ACCommand();
// Turn on the light
remote.pressButton(lightCommand);
// Turn on the AC
remote.pressButton(acCommand);
// Undo the last command (AC OFF)
remote.pressUndo();
// Undo the last command (Light OFF)
remote.pressUndo();
