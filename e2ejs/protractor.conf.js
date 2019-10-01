"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
exports.config = {
    seleniumAddress: "http://127.0.0.1:4444/wd/hub",
    baseUrl: "http://localhost:8080/",
    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),
    specs: [
        "../e2e/features/*.feature",
    ],
    onPrepare: () => {
        protractor_1.browser.manage().window().maximize();
    },
    cucumberOpts: {
        compiler: "ts:ts-node/register",
        format: "json:.tmp/results.json",
        profile: false,
        require: ["./step_definitions/*.steps.js", "./support/hooks.js"],
        tags: false,
        "no-source": true,
    },
    plugins: [{
            options: {
                automaticallyGenerateReport: true,
                removeExistingJsonReportFile: true,
            },
            package: "protractor-multiple-cucumber-html-reporter-plugin",
        }],
};
