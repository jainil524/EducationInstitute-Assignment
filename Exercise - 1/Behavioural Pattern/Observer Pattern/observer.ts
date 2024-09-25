// Observer Interface
interface DisplayDevice {
    update(temperature: number): void;
}

// Subject Class
class WeatherStation {
    private devices: DisplayDevice[] = [];
    private temperature: number = 0;

    registerDevice(device: DisplayDevice) {
        this.devices.push(device);
    }

    removeDevice(device: DisplayDevice) {
        this.devices = this.devices.filter(d => d !== device);
    }

    // Method to notify all devices
    notifyDevices() {
        this.devices.forEach(device => device.update(this.temperature));
    }

    // Update temperature and notify all devices
    setTemperature(temp: number) {
        console.log(`WeatherStation: New temperature = ${temp}°C`);
        this.temperature = temp;
        this.notifyDevices();
    }
}

// Concrete Observer: Smartphone
class Smartphone implements DisplayDevice {
    update(temperature: number) {
        console.log(`Smartphone: Current temperature is ${temperature}°C`);
    }
}

// Concrete Observer: Tablet
class Tablet implements DisplayDevice {
    update(temperature: number) {
        console.log(`Tablet: Current temperature is ${temperature}°C`);
    }
}

// Usage Example
const weatherStation = new WeatherStation();
const smartphone = new Smartphone();
const tablet = new Tablet();

// Register devices
weatherStation.registerDevice(smartphone);
weatherStation.registerDevice(tablet);

// Update temperature (notifies devices)
weatherStation.setTemperature(25);
weatherStation.setTemperature(30);
