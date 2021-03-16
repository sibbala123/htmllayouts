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