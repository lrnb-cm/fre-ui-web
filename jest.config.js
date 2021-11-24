module.exports = {
    reporters: ["default", "jest-junit"],
    "jest-junit": {
      suiteName: "jest tests",
      outputDirectory: ".",
      outputName: "junit.xml",
      uniqueOutputName: "false",
      classNameTemplate: "{classname}-{title}",
      titleTemplate: "{classname}-{title}",
      ancestorSeparator: " › ",
      usePathForSuiteName: "true",
    },
  };