interface PluralizeOptions {
  pluralForm: string;
}

export class Pluralizer {
  public pluralize(word: string, options?: PluralizeOptions): string {
    if (options && options.pluralForm) {
      return options.pluralForm;
    }

    return `${word}s`;
  }

  public pluralizeIfNeceesary(
    number_of_elements: number,
    word: string,
    options?: PluralizeOptions
  ): string {
    if (number_of_elements === 1) {
      return word;
    }

    return this.pluralize(word, options);
  }
}

export const pluralizer = () => new Pluralizer();
