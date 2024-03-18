const express = require('express');
const app = express();
const { connectDb } = require('./db'); // Import connectDb function
const trainRoutes = require('./routes/railwayRoutes');

app.use(express.json());
app.use("/railway",trainRoutes);

connectDb().then((db) => {
    app.listen(5000, () => {
        console.log('App listening on port 5000');
    });
}).catch((err) => {
    console.log(err);
});
