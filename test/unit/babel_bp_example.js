import babelBpExample from '../../src/babel_bp_example';

describe('babelBpExample', () => {
  describe('Greet function', () => {
    beforeEach(() => {
      spy(babelBpExample, 'greet');
      babelBpExample.greet();
    });

    it('should have been run once', () => {
      expect(babelBpExample.greet).to.have.been.calledOnce;
    });

    it('should have always returned hello', () => {
      expect(babelBpExample.greet).to.have.always.returned('hello');
    });
  });
});
