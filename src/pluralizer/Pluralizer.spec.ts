import { Pluralizer, pluralizer } from "./Pluralizer";

describe(pluralizer, () => {
  let underTest: Pluralizer;

  beforeAll(() => {
    underTest = pluralizer();
  });

  it('should return an instance of the pluralizer class', () => {
    expect(underTest).toBeInstanceOf(Pluralizer);
  });

  it('should return the default plural form of a work', () => {
    expect(underTest.pluralize('work')).toBe('works');
    expect(underTest.pluralize('book')).toBe('books');
  });

  it('should return the plural form when one is passed', () => {
    const pluralForm = 'people';

    expect(underTest.pluralize('person', { pluralForm })).toBe(pluralForm);
  });

  it('should apply not the plural form to a word when the number of elements is 1', () => {
    expect(underTest.pluralizeIfNeceesary(1, 'person')).toBe('person');
    expect(underTest.pluralizeIfNeceesary(1, 'person', { pluralForm: 'people' })).toBe('person');
  });

  it('should apply the plural form to a word when the number of elements is greater than 1', () => {
    expect(underTest.pluralizeIfNeceesary(2, 'person', { pluralForm: 'people' })).toBe('people');
    expect(underTest.pluralizeIfNeceesary(2, 'person', { pluralForm: 'people' })).toBe('people');
  });
});
