const SmartContract = artifacts.require('SmartContract');

module.exports = function (deployer) {
  deployer.deploy(SmartContract);

  /* Just an example of deploying one contract then another to use first
  constract's address in the constructor of the second. Delete if not required.
  */

  // deployer.deploy(SmartContract).then(() => {
  //   return deployer.deploy(SmartContract2, SmartContract.address);
};
