'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it('should return true for a valid email', () => {
    expect(validateEmail('my.personal_info-2@mail-1.com')).toBe(true);
  });

  describe('personal info', () => {
    it('starts with dot', () => {
      expect(validateEmail('.test@mail.com')).toBe(false);
    });

    it('double dots', () => {
      expect(validateEmail('te..st@mail.com')).toBe(false);
    });

    it('ends with dot', () => {
      expect(validateEmail('test.@mail.com')).toBe(false);
    });

    it('not english letters', () => {
      expect(validateEmail('тest@mail.com')).toBe(false);
    });

    it('with special char', () => {
      expect(validateEmail('test!@mail.com')).toBe(false);
    });
  });

  it('without @', () => {
    expect(validateEmail('testmail.com')).toBe(false);
  });

  describe('domain', () => {
    it('starts with dot', () => {
      expect(validateEmail('test@.mail.com')).toBe(false);
    });

    it('with special char', () => {
      expect(validateEmail('test@mail!.com')).toBe(false);
    });
  });
});
