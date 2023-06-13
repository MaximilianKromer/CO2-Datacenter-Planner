class datacenter_t {
    constructor(name, watt, cpu_count, ram_count, storage, graphics_cards, load_graph, locations) {
        this.name = name;
        this.cpus = parseInt(cpu_count) || 0;
        this.ram = parseFloat(ram_count) || 0.0;
        this.storage = parseFloat(storage) || 0.0;
        this.graphics_cards = parseInt(graphics_cards) || 0;
        this.watt = watt || datacenter_t.calc_wattage(this.cpus, this.ram, this.storage, this.graphics_cards);
        this.load = load_graph;
        this.locations = locations;
    }
    
    
    /*
    * Rechnet immer den Spitzenverbrauch aus der dann mit der Last anzeige skalliert wird
    * Quelle: https://medium.com/teads-engineering/estimating-aws-ec2-instances-power-consumption-c9745e347959
    * Wenn jemand deep-diven will in ram power-consumption: https://media-www.micron.com/-/media/client/global/documents/products/technical-note/dram/tn4007_ddr4_power_calculation.pdf?la=en&rev=cb57f4591a4e4cfba81a62bb1ea6c948
    */
    static calc_wattage(cpu, ram, mem, graph){
        let watt = 0.0;
        watt += cpu * 5;
        watt += 0.41 * ram;
        // nach den specs vom seagate ultrastar realität ist wahrscheinlich mehr durch SANs usw.
        watt += 1.0 * mem;
        
        // modeliert nach nvidia tesla V100 für ML
        watt += 300 * graph;
            
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

        // TODO: kWhArray ist noch nicht richtig
        let kWhArray = [];
        for (let i = 0; i < 24; i++) {
            kWhArray.push(this.watt * loadArray[i] / 1000);
        }
        return kWhArray;
    }
    
}

export default datacenter_t;
