//////// If a string contains only Strings and Nums

function isAlphanumeric(str) {
    return /^[a-zA-Z0-9]+$/.test(str);
}

///// Returns an Array of Matches or Null

function isAlphanumeric(str) {
    return str.match(/^[a-zA-Z0-9]+$/) !== null;
}

////// Returns index of first match or -1

function isAlphanumeric(str) {
    return str.search(/^[a-zA-Z0-9]+$/) !== -1;
}
