const express = require("express");
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());

app.post('/sum', (req, res) => {
    // Assuming the request body contains JSON data
    const requestData = req.body;

    // Assuming requestData has a "number" field
    const receivedNumber = requestData.oi + 1;

    // You can perform further processing here

    // Sending a response
    res.json({ message: 'Number received successfully', a: receivedNumber });
});



app.listen(8042, () => {
	console.log("servidor escutando em http://localhost:8042");
})
