const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
app.get('/api/express_backend', (req, res) => {
    res.send({express: 'Express backend is connected'})
});

var snmp = require ("net-snmp");
var session = snmp.createSession ("127.0.0.1", "public");

var oids = ["1.3.6.1.2.1.1.5.0", "1.3.6.1.2.1.1.6.0"];

app.route('/api/sendTrap').get((req, res) => {

    let varBinds = [{
        oid: oids[1],
        type: snmp.ObjectType.trap,
        value: new Buffer('Test data')
    }]

    try {
        session.trap (snmp.TrapType.LinkDown, varBinds, (error, data) => {
            if(error) {
                console.error(error);
            } else {
                console.log('trap successfully sent');
            }
        });
    } catch(error) {
        console.error(error);
    }
})
