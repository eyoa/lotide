// function scan object return first key for when the callback returns true if no key then return undefined.

const findKey = function(searchObj, callback) {
  for (let key in searchObj) {
    if (callback(searchObj[key])) {
      return key;
    }
  }
  return;
};

module.exports = findKey;