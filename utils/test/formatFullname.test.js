const formatFullname = require('../formatFullname');
const expect = require('chai').expect;

describe('formatFullname', () => {

  it('should return an error if "content" arg is not a string', () => {
    expect(formatFullname(undefined)).to.equal('Error');
    expect(formatFullname(6654)).to.equal('Error');
    expect(formatFullname({})).to.equal('Error');
    expect(formatFullname([])).to.equal('Error');
    expect(formatFullname(function() {})).to.equal('Error');
  });

  it('should return an error if "content" has uncorrect format (other than <firstname><lastname>)', () => {
    expect(formatFullname('john doe')).to.equal('John Doe');
  });
});