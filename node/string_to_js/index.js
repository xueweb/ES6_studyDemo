/**
 * Created by helti on 2017/12/2.
 */
module.exports = function (str) {
    return "module.exports = '"
        + str
            .replace(/'/g, "\\'")
            .replace(/\r\n|\r|\n/g, "\\n")
        + "';";
};