class datacenter_kwh {
    constructor(name, watt, kilowatt, load_graph, locations) {
        this.name = name;
        this.kilowatt = parseInt(kilowatt) || 0;
        this.watt = watt || datacenter_kwh.calc_wattage(this.kilowatt);
        this.load = load_graph;
        this.locations = locations;
    }

    static calc_wattage(kilowatt) {
        let watt = 0.0;
        watt += kilowatt;
        return watt;
    }

    get kWhArray() {
        return this.calc_kWhArray();
    }

    get kWh() {
        let sum = 0;
        for (let i = 0; i < 24; i++) {
            sum += this.kWhArray[i];
        }
        return sum;
    }

    calc_kWhArray() {
        let loadArray = [];
        for (let i = 0; i < 12; i++) {
            loadArray.push(this.load[i]);
            loadArray.push((this.load[i] + this.load[i + 1]) / 2);
        }

        let kWhArray = [];
        for (let i = 0; i < 24; i++) {
            kWhArray.push(this.watt * loadArray[i] / 1000);
        }
        return kWhArray;
    }
}

export default datacenter_kwh;
