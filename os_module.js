const os = require('os')
console.log(os.userInfo());
const uptime = os.uptime()//uptime in seconds
console.log(uptime);
const currOs = {
    name: os.type(),
    release : os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}
console.log(currOs);