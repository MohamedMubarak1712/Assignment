module.exports = {
    HOST: "localhost", // Replace it with your own host address
    USER: "postgres", // Replace with your own username
    PASSWORD: "Mubarak", // Replace with your own password
    DB: "checkdb",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  };