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

  set name(name) {
    if (typeof name !== 'string') throw TypeError('must be a string');
    this._name = name;
  }

  get code() {
    return `${this._name}`;
  }

  set code(code) {
    if (typeof code !== 'string') throw TypeError('must be a string');
    this._code = code;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
