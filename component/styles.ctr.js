
module.exports = function (ctr, requireWatch) {
  ctr.yaml('./styles.ctr.yml', {requireWatch});
  return ctr.getResult();
};
