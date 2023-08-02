/**
* @type {import('@stryker-mutator/api/core').PartialStrykerOptions}
*/
module.exports = {
    testRunner: "jest",
    coverageAnalysis: "off",
    timeoutMS: 60000,
    tempDirName: "stryker-tmp",
    mutate: [
        "src/*.js",
        "!src/data/*.*",
    ],
};