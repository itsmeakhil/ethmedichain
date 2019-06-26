const medichainMigrations = artifacts.require("Migrations");

module.exports = function(deployer) {
  deployer.deploy(medichainMigrations);
};
