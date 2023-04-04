const sequelize = require('../config/connection');

const userData = require('./userData.json');
// TODO: Input more data into the seeds section as needed
// Require our specific files 

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

 

  process.exit(0);
};

seedDatabase();
