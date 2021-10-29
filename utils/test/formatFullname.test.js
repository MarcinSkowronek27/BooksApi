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
    expect(formatFullname(null)).to.equal('Error');
    expect(formatFullname('john ')).to.equal('Error');
    expect(formatFullname(' doe')).to.equal('Error');
    expect(formatFullname('john doe test')).to.equal('Error');
    expect(formatFullname('john doe test test')).to.equal('Error');
    expect(formatFullname('; doe')).to.equal('Error');
    expect(formatFullname('john .')).to.equal('Error');
  });

  it('should return a correct "content" (ex. John Doe) if "content" has uncorrect upper and lower case (ex. JoHn doE', () => {
    expect(formatFullname('joHn DoE')).to.equal('John Doe');
    expect(formatFullname('JOHN DOE')).to.equal('John Doe');
    expect(formatFullname('jOHN dOE')).to.equal('John Doe');
  });
});