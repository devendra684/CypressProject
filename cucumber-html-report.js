
const report = require("multiple-cucumber-html-reporter");
report.generate({
    jsonDir: "cypress/cucumber-json",  // ** Path of .json file **//
    reportPath: "./reports/cucumber-htmlreport.html",
    metadata: {
        browser: {
        name: "Chrome",
        version: "11",
        },
        device: "Dell Inspiron 15",
        platform: {
        name: "Windows",
        version: "10",
        },
    },
    customData: {
            title: "Run info",
            data: [
              { label: "Project", value: "Cypress project for The Souled Store" },
              { label: "Release", value: "0.1" },
              { label: "Cycle", value: "A1" },
              { label: "Execution Start Time", value: "20th April 2023, 11:30 AM EST" },
              { label: "Execution End Time", value: "22th April 2023, 11:50 PM EST" },
            ],
    },
});




// const report = require("multiple-cucumber-html-reporter");

// report.generate({
//   jsonDir: "./path-to-your-json-output/",
//   reportPath: "./path-where-the-report-needs-to-be/",
//   metadata: {
//     browser: {
//       name: "chrome",
//       version: "60",
//     },
//     device: "Local test machine",
//     platform: {
//       name: "ubuntu",
//       version: "16.04",
//     },
//   },
//   customData: {
//     title: "Run info",
//     data: [
//       { label: "Project", value: "Custom project" },
//       { label: "Release", value: "1.2.3" },
//       { label: "Cycle", value: "B11221.34321" },
//       { label: "Execution Start Time", value: "Nov 19th 2017, 02:31 PM EST" },
//       { label: "Execution End Time", value: "Nov 19th 2017, 02:56 PM EST" },
//     ],
//   },
// });