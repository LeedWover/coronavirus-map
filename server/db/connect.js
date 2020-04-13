const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE,{ dbName: 'corona-db',useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
mongoose.connection.on('connected', () => console.log('mongoose is connected'));
