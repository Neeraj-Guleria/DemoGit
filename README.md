# DemoGit

This is for Demo purposes Cypress
| Tags                    | Tags Type                        | Description |
|-------------------------|----------------------------------|-------------|
| Platform                | `@ed` or `@flight` or `@waggle`  |  To describe the platform, the current feature file was written,this also helps us to run all tests for either of the platforms.|
| Functional testing type | `@regression` or `@sanity`       | The tests have to be run in the deployment pipelines. They are designed to ensure that newly introduced changes in <br>the codebase do not adversely affect the existing functionality.  |
| Domain                  | `@reporting`, `@learnosity`      | For the tests that are to be run when a service is changed or any upgrade happens. This will help us to run all tests for specific service upgrade.            |
| Persona/Role            | `@teacher`, `@student`, `@admin` | To identify the user scenarios for specific users. (Maybe later expanded as the Capability model is rolled out.)               |
| Suite/Feature           | `@scores`, `@studentDashboard`   | For breaking the tests into suites which can be one per feature file or group of feature files.<br>(Do remember that tags ARE case sensitive.)            |
