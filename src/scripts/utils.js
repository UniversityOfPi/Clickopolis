"use strict";
var Utils = (function () {
    function Utils() {
    }
    Utils.prototype.abbrNum = function (number, decPlaces) {
        if (decPlaces === void 0) { decPlaces = 2; }
        // 2 decimal places => 100, 3 => 1000, etc
        decPlaces = Math.pow(10, decPlaces);
        // Enumerate number abbreviations
        var abbrev = ["k", "m", "b", "t"];
        // Go through the array backwards, so we do the largest first
        for (var i = abbrev.length - 1; i >= 0; i--) {
            // Convert array index to "1000", "1000000", etc
            var size = Math.pow(10, (i + 1) * 3);
            // If the number is bigger or equal do the abbreviation
            if (size <= number) {
                // Here, we multiply by decPlaces, round, and then divide by decPlaces.
                // This gives us nice rounding to a particular decimal place.
                number = Math.round(number * decPlaces / size) / decPlaces;
                // Handle special case where we round up to the next abbreviation
                if ((number == 1000) && (i < abbrev.length - 1)) {
                    number = 1;
                    i++;
                }
                // Add the letter for the abbreviation
                number += abbrev[i];
                // We are done... stop
                break;
            }
        }
        return number;
    };
    Utils.prototype.capitalize = function (str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };
    Utils.prototype.choose = function (arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    };
    Utils.prototype.elt = function (query, all) {
        if (all === void 0) { all = false; }
        if (all === false)
            return document.querySelector(query);
        else
            return document.querySelectorAll(query);
    };
    Utils.prototype.progressBar = function (percent, progressColor, endColor, direction) {
        if (direction === void 0) { direction = 'right'; }
        function render() {
            var progressBar = "linear-gradient(to " + direction + ", " + progressColor + " 0%, " + progressColor + " " + percent + ", " + endColor + " " + percent + ", " + endColor + " 100%)";
            return progressBar;
        }
        return render();
    };
    Utils.prototype.randomColor = function () {
        var randomColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
        return randomColor;
    };
    return Utils;
}());
module.exports = Utils;
//# sourceMappingURL=utils.js.map