const TYPES = {
  STRING: "string",
  BOOLEAN: "boolean",
  NUMBER: "number",
};

const REQUIRED = true;

function fieldValidator(validationSchema, objectToValidate) {
  let message = null;
  const checkIfNull = (value) => value === undefined || value === null || value === "";
  const nullError = (key) => `'${key}' is mandatory`;
  const typeError = (key, expectedType, currentType) =>
    `Expected type for '${key}' is: ${expectedType} but current type is: ${currentType}`;
  const buildReturn = (message) => ({ validationError: message != null, message });

  function multipleCheck(checks, key, value) {
    const [expectedType] = checks;
    const currentType = typeof value;
    const validType = expectedType == currentType;
    const isNull = checkIfNull(value);

    if (isNull) return nullError(key);
    if (!validType) return typeError(key, expectedType, currentType);
    return null;
  }

  function typeCheck(check, key, value) {
    const expectedType = check;
    const currentType = typeof value;
    const isNull = checkIfNull(value);
    const validType = expectedType == currentType;

    if (isNull) return null;
    return !validType ? typeError(key, expectedType, currentType) : null;
  }

  for (let key in validationSchema) {
    let hasMultipleChecks = Array.isArray(validationSchema[key]);
    let functionCheck = hasMultipleChecks ? multipleCheck : typeCheck;
    message = functionCheck(validationSchema[key], key, objectToValidate[key]);
    if (message != null) return buildReturn(message);
  }

  return buildReturn(message);
}

module.exports = {
  fieldValidator,
  TYPES,
  REQUIRED,
};
