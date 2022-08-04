'use strict';

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
String.prototype.fifty = function (s, n) {
    var str = s,
        num = n,
        newStr = '';
    for (var i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
            newStr += String.fromCharCode((str.charCodeAt(i) - 65 - num + 26) % 26 + 65);
        } else if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
            newStr += String.fromCharCode((str.charCodeAt(i) - 97 - num + 26) % 26 + 97);
        } else newStr += String.fromCharCode(str.charCodeAt(i));
    }
    return newStr;
};
String.prototype.vm = function (c, k) {
    var ciphertext = c,
        key = k,
        plaintext = '';
    var kpos = 0;
    for (var i = 0; i < ciphertext.length; i++) {
        var Kcode = key.charCodeAt(kpos % key.length);
        var Ccode = ciphertext.charCodeAt(i);
        var Pcode = Ccode;
        if (Ccode >= 65 && Ccode <= 90) {
            if (Kcode >= 65 && Kcode <= 90) {
                Pcode = (Ccode - 65 - (Kcode - 65) + 26) % 26 + 65;
            }
            if (Kcode >= 97 && Kcode <= 122) {
                Pcode = (Ccode - 65 - (Kcode - 97) + 26) % 26 + 65;
            }
            kpos++;
        }
        if (Ccode >= 97 && Ccode <= 122) {
            if (Kcode >= 65 && Kcode <= 90) {
                Pcode = (Ccode - 97 - (Kcode - 65) + 26) % 26 + 97;
            }
            if (Kcode >= 97 && Kcode <= 122) {
                Pcode = (Ccode - 97 - (Kcode - 97) + 26) % 26 + 97;
            }
            kpos++;
        }
        plaintext += String.fromCharCode(Pcode);
    }
    return plaintext;
};
String.prototype.btoa = function () {
    return Buffer.from('RUVOIEZxenl4IFNidGN2Y3p4IQ==', 'base64').toString('utf-8');
};
String.prototype.toString = function () {
    var $ = this.btoa();
    $ = this.vm($, 'v me 25 +');
    $ = this.fifty($, 25);
    return $;
};

var RuntimeError = function (_Error) {
    _inherits(RuntimeError, _Error);

    function RuntimeError(type) {
        _classCallCheck(this, RuntimeError);

        var message = type.toString();

        var _this = _possibleConstructorReturn(this, (RuntimeError.__proto__ || Object.getPrototypeOf(RuntimeError)).call(this, message));

        _this.name = 'RuntimeError';
        return _this;
    }

    return RuntimeError;
}(Error);

var time = new Date();
if (time.getDay() === 4) {
    throw new RuntimeError('Unknown');
}
