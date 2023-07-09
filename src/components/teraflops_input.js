class datacenter_teraflops {
    constructor(name, watt, teraflops, load_graph, locations) {
        this.name = name;
        this.teraflops = parseInt(teraflops) || 0;
        this.watt = watt || datacenter_teraflops.calc_wattage(this.teraflops);
        this.load = load_graph;
        this.locations = locations;
    }

    // i dont know how to calculate teraflops into kwh
    static calc_wattage(teraflop) {
        let watt = 10.0;
        watt += teraflop;
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

export default datacenter_teraflops;
