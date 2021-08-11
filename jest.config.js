const { getJestProjects } = require('@nrwl/jest');

module.exports = {
  projects: [
    ...getJestProjects(),
    '<rootDir>/apps/mychurch-admin',
    '<rootDir>/libs/shells/mychurch-admin',
    '<rootDir>/libs/models',
  ],
};
