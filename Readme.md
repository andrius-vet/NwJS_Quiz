# Quizmart e2e test suite

---

## Tests directory e2e-tests

All tests could be executed by command:<br />

| Windows   |   iOS     |
|---        |---        |
|  nightwatch | npx nightwatch |

Specific test could be executed by command:<br />

| Windows   |   iOS     |
|---        |---        |
|  nightwatch e2e_test/XXX | npx nightwatch e2e_test/XXX|

* where "XXX" is test name from e2e_test directory

---

# Page model

List of tracked pages and files:<br />

| File  |   Description     |
|---    |---                |
| landingPage.js | Elements of landing page user sees firs |
| loginPage.js   | Elements of login pages (Google, FB, email, etc...) |
| menuPage.js    | Elements of menu pages (main Menu, player menu, user menu etc...) |