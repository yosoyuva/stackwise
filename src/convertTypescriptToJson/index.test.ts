import convertTypescriptToJson from '.';

test('flattenInputJson correctly', () => {
  const jsonInput = `(property) in: {
    test: {
        example: boolean;
    };
}`;
  const expectedOutput = {
    test: {
        example: 'boolean'
    }
};

  const result = convertTypescriptToJson(jsonInput);
  expect(result).toEqual(expectedOutput);
});

test('flattenInputJson correctly', () => {
  const jsonInput = `
\`\`\`typescript
(property) 'in': string[]
\`\`\`


`;
  const expectedOutput = {
    in: 'string[]'
  };

  const result = convertTypescriptToJson(jsonInput);
  expect(result).toEqual(expectedOutput);
});

test('flattenInputJson correctly', () => {
  const jsonInput = `
\`\`\`(property) in: string
\`\`\`
  
`;
  const expectedOutput = {
    in: 'string'
  };

  const result = convertTypescriptToJson(jsonInput);
  expect(result).toEqual(expectedOutput);
});





