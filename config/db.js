const mongoose = require('mongoose');

const connect = () => {
	try {
		mongoose.connect(process.env.MONGO_URI, { dbName: 'Innercalm' });
		console.log('Database successfully connected'.yellow);
	} catch (err) {
		console.log(`${err.message}`.green.red);
	}
};

module.exports = connect;