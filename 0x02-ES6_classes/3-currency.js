export default class Currency {
  constructor(code, name) {
    if (typeof name !== 'string') throw TypeError('must be a string');
    if (typeof code !== 'string') throw TypeError('must be a string');
    this._name = name;
    this._code = code;
  }

  get name() {
    return `${this._name}`;
  }

  set name(newName) {
    if (typeof newName !== 'string') throw TypeError('must be a string');
    this._name = newName;
  }

  get code() {
    return `${this._name}`;
  }

  set code(newCode) {
    if (typeof newCode !== 'string') throw TypeError('must be a string');
    this._code = newCode;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
