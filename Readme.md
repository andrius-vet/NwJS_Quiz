# Quizmart e2e test suite

---

## Tests directory e2e-tests
To run all tests on default development environment execute command:<br />

| Windows   |   iOS     |
|---        |---        |
|  nightwatch | npx nightwatch |

All tests could be executed on different environments by commands:<br />

| Windows   |   iOS     | 
|---        |---        |
|  nightwatch -e dev | npx nightwatch -e dev |
|  nightwatch -e prod | npx nightwatch -e prod |

Specific test could be executed by command:<br />

| Windows   |   iOS     |
|---        |---        |
|  nightwatch -e dev e2e_test/XXX | npx nightwatch -e dev e2e_test/XXX|
|  nightwatch -e prod e2e_test/XXX | npx nightwatch -e prod e2e_test/XXX|

* where "XXX" is test name from e2e_test directory <br />
* where "dev" and "prod" are two available for testing environments

---

# Page model

List of tracked pages and files:<br />

| File  |   Description     |
|---    |---                |
| landingPage.js | Elements of landing page user sees firs |
| loginPage.js   | Elements of login pages (Google, FB, email, etc...) |
| menuPage.js    | Elements of menu pages (main Menu, player menu, user menu etc...) |

---
### Todo list:
Spaces that needs to be covered with tests:

|  | Space  |   Comment     |
|---    |---    |---    |
| ...   | Landing page      | Started, not fully covered |
| X     | Register          | |
| X     | Password reminder | |
| ...   | Login             | missing login other ways  |
| X     | Play quiz         | Play quiz page, not the game  |
| X     | Discover          | Discover page (not sets/questions)  |
| X     | Library           | Library page (not sets/questions) |
| X     | Profile           | User profile page  |
| X     | Discovery (sets)  | Set preview + actions with sets in Discovery |
| X     | Discovery (Questions) | Question preview + actions with questions in Discovery |
| X     | Library (Sets)    | Set creation, modification etc... |
| X     | Library (Question) | Question creation, modification etc...   |
| X     | Single player game    | Single player game walk-through (Pre-made set) |
| X     | Host multiplayer game | Host pre-made Multiplayer game + "I will play" |
| X     | Join hosted game      | Join pre-made game walk-through |
| X     | Present Quiz          | Preview and follow pre-hosted game |

