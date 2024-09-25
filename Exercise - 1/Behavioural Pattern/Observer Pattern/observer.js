// Subject Class
var WeatherStation = /** @class */ (function () {
    function WeatherStation() {
        this.devices = [];
        this.temperature = 0;
    }
    WeatherStation.prototype.registerDevice = function (device) {
        this.devices.push(device);
    };
    WeatherStation.prototype.removeDevice = function (device) {
        this.devices = this.devices.filter(function (d) { return d !== device; });
    };
    // Method to notify all devices
    WeatherStation.prototype.notifyDevices = function () {
        var _this = this;
        this.devices.forEach(function (device) { return device.update(_this.temperature); });
    };
    // Update temperature and notify all devices
    WeatherStation.prototype.setTemperature = function (temp) {
        console.log("WeatherStation: New temperature = ".concat(temp, "\u00B0C"));
        this.temperature = temp;
        this.notifyDevices();
    };
    return WeatherStation;
}());
// Concrete Observer: Smartphone
var Smartphone = /** @class */ (function () {
    function Smartphone() {
    }
    Smartphone.prototype.update = function (temperature) {
        console.log("Smartphone: Current temperature is ".concat(temperature, "\u00B0C"));
    };
    return Smartphone;
}());
// Concrete Observer: Tablet
var Tablet = /** @class */ (function () {
    function Tablet() {
    }
    Tablet.prototype.update = function (temperature) {
        console.log("Tablet: Current temperature is ".concat(temperature, "\u00B0C"));
    };
    return Tablet;
}());
// Usage Example
var weatherStation = new WeatherStation();
var smartphone = new Smartphone();
var tablet = new Tablet();
// Register devices
weatherStation.registerDevice(smartphone);
weatherStation.registerDevice(tablet);
// Update temperature (notifies devices)
weatherStation.setTemperature(25);
weatherStation.setTemperature(30);
