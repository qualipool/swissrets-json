import { KeywordDefinition } from 'ajv/dist/2020';

export const allCustomValidators = (): KeywordDefinition[] => {
  return [sameAsCustomValidator, uniqueIdCustomValidator];
};

const sameAsCustomValidator: KeywordDefinition = {
  keyword: 'sameAs',
  schema: false,
  validate: function (value: unknown, root: unknown) {
    // needed to add this because this custom validator takes precedence over the type check
    // @ts-expect-error - this is a custom validator
    if (!Array.isArray(root.rootData.projects)) {
      return true;
    }

    // @ts-expect-error - this is a custom validator
    return root.rootData.projects.some((obj: unknown) =>
      // @ts-expect-error - this is a custom validator
    obj.units?.some((item: unknown) => item.referenceId === value),
    );
  },
  errors: true,
};

const uniqueIdCustomValidator: KeywordDefinition = {
  keyword: 'uniqueId',
  schema: false,
  validate: function (values: unknown) {
    if (!values) {
      return false;
    }
    // @ts-expect-error - this is a custom validator
    return new Set(values.map((item: unknown) => item.referenceId)).size == values.length;
  },
  errors: true,
};
