/**
/** @type {import('jest').Config} */
const config = {
    clearMocks: true,
    collectCoverageFrom: ['src/*.js'],
    coverageDirectory: 'reports/coverage',
    coverageProvider: 'babel',
    coverageReporters: ['text', 'lcov'],
};

module.exports = config;
