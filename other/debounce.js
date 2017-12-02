function debounce(func, awit) {
    var timeout;
    return function () {
        clearTimeout(timeout);
        timeout = setTimeout(func, awit)
    }
}

function testFun() {
    console.log('debounce');
}

// debounce(testFun,1000);
//setTimeout(debounce(testFun,1000));

function debounce1(func, wate) {
    var timeout;
    return function () {
        clearTimeout(timeout);
        var content = this;
        timeout = setTimeout(function () {
            func.apply(content)
        }, wate)
    }
}

function debounce2(func, wait) {
    var timeout;
    return function () {
        var content = this;
        var args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            func.apply(content, args);
        }, wait);
    }
}

function debounce3(func, wait, immediate) {
    var timeout, result;

    return function () {
        var content = this;
        var args = arguments;

        if (timeout) clearTimeout(timeout);

        if (immediate) {
            var callNow = !timeout;
            timeout = setTimeout(function () {
                timeout = null;
            }, wait);
            if (callNow) {
                func.apply(content, args);
            }
        } else {
            timeout = setTimeout(function () {
                func.apply(content, args);
            }, wait);
        }
    }
}

function debounce4(func, wait, immediate) {
    var timeout, resul;
    return function () {
        var context = this;
        var args = arguments;

        if (timeout) clearTimeout(timeout);
        if (immediate) {
            var callNow = !timeout;
            timeout = setTimeout(function () {
                timeout = null;
            }, wait)
            if (callNow) {
                resul = func.apply(context, args);
            }
        } else {
            timeout = setTimeout(function () {
                func.apply(context, args)
            }, wait);
        }
        return resul;
    }
}

function debounce5(func, wait, immediate) {
    var timeout, result;
    var debounced = function () {
        var context = this;
        var args = arguments;
        if (timeout) clearTimeout(timeout);

        if (immediate) {
            var callNow = !timeout;
            timeout = setTimeout(function () {
                timeout = null;
            }, wait);

            if (callNow) result = func.apply(context, args)
        } else {
            timeout = setTimeout(function () {
                func.apply(context, args)
            }, wait)
        }
        return result;
    };
    debounced.cancel = function () {
        clearTimeout(timeout);
        timeout = null;
    };
    return debounced;
}
