const os = require('os');


const funciones = {
    memTotal: () => {
        let formulaTotalMb = os.totalmem * [Math.pow(10, -6)];
        let formulaTotalGb = os.totalmem * [Math.pow(10, -9)];
        return (formulaTotalMb + 'Mb, ' + formulaTotalGb + 'Gb')
    },

    memDisponible: () => {
        let formulaFreeMb = os.freemem * [Math.pow(10, -6)];
        let formulaFreeGb = os.freemem * [Math.pow(10, -9)];
        return (formulaFreeMb + 'Mb, ' + formulaFreeGb + 'Gb')
    }
    
}


module.exports = funciones;


