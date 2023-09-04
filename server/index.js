const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 3000;
console.log(process.env.ORIGIN_URL)
app.use(cors({
    credentials: true,
    origin:
        "https://girish-frontend-developer-client.vercel.app"
}));

app.get('/api/capsules', async (req, res) => {
    try {
        const { status, type, landings } = req.query;
        const queryParams = [];

        if (status) {
            queryParams.push(`status=${status}`);
        }
        if (type) {
            queryParams.push(`type=${type}`);
        }
        if (landings) {
            queryParams.push(`landings=${landings}`);
        }
        const queryString = queryParams.join('&');

        const apiUrl = `https://api.spacexdata.com/v3/capsules${queryString ? `?${queryString}` : ''}`;
        const response = await axios.get(apiUrl);
        const capsulesData = response.data;
        res.json(capsulesData);
    } catch (error) {
        // console.error('Error fetching capsules data:', error);
        res.status(500).json({ error: 'An error occurred while fetching data' });
    }
});

app.listen(port, () => {
    console.log(`Successful`, port);
});
