var Validator = function() {};

Validator.prototype.validate = function(value, rules) {
    var self = this;
    return rules.every(function(rule) {
        return self[rule](value);
    });
};

Validator.prototype.isNotEmpty = function(value) {
    if (value !== '' && value !== null && typeof value !== 'undefined') {
        return true;
    }
    return false;
};
entityObject2.prototype.set = function(value, key) {
    if (this.validator.validate(value, key.validator)) {
        key.value = value;
        return true;
    }
    return false;
};

entityObject2.prototype.setSrc = function(name) {
    this.set(src, this.attributes.src);
};
