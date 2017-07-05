
module.exports = function (ctr, requireWatch) {
  ctr.create('body', {
    background: '#eee',
    height: '100vh',
    overflow: 'hidden',
    grid: {
      // align: 'center'
    },
    'comp-.title': {
      'margin-bottom': '5vh',
      'font-family': "'Bellefair', serif",
      'letter-spacing': '0.5em',
      color: 'rgba(0, 0, 0, 0.6)',
      'font-size': ['responsive', '1em', '4em'],
      grid: {
        column: '1/1',
        align: 'center'
      }
    }
  });
  ctr.yaml('./styles.ctr.yml', {requireWatch});
  return ctr.getResult();
};
