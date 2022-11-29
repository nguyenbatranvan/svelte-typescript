/**
 * add data from url by regex {}
 * @memberOf String
 * @param {...(string[])}
 * @returns {string} return api after add data
 * @example
 *
 * const url='api/remove/{0}/product/{1}'
 *
 * const id1="1234"; const id2="789"
 *
 * url.format(id1, id2)
 *
 * // => 'api/remove/1234/product/789'
 */
// eslint-disable-next-line no-extend-native
/**
 * @param args
 */
// eslint-disable-next-line no-extend-native
String.prototype.format = function (...args: string[]): string {
    return this.replace(/{(\d+)}/g, (match, number) => {
        return (typeof args[number] != 'undefined') ? args[number] : match;
    });
}

/**
 * capitalize first character of string
 * @return {string}
 * @example
 * const a ='aNonMos'
 * const b = a.capitalizeFirstLetter()
 * // => 'Anonymous'
 * */
// eslint-disable-next-line no-extend-native
String.prototype.capitalizeFirstLetter = function (): string {
    const s = this.toLowerCase();
    return s.charAt(0).toUpperCase() + s.slice(1);
}
export {};
