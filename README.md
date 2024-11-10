README.md
# Welcome to Nataproject!
## **CLONE THE REPOSITORY**
Clone the project to your local machine using Git. [PROJECT here](https://github.com/Nata-Kir/qa_auto_3.1_unit.git).
## **INSTALL DEPENDENCES**
Run in Terminal 'npm install'.
## **RUN TESTS**
Use command 'npx jest' to run tests.
# ENJOY!
# Uh! What about test coverage?! Let's measure test coverage.
To calculate test coverage, follow these three steps:
1. Break down the software into testable units, such as functions, methods, or lines of code.
2. Execute your test suite and track the number of units covered by the tests, using testing tools or frameworks.
3. Calculate the test coverage percentage by dividing the executed units by the total testable units and multiplying by 100.

**Formula: Test Coverage Percentage = (Executed Units / Total Testable Units) * 100**

## **To measure code coverage, you’d typically need a dedicated coverage tool**
Install dependency: run in Terminal 'npm install --save-dev babel-plugin-istanbul'
## **GET COVERAGE REPORT**
Run in Terminal 'npx jest --coverage'
## Code Coverage description 
 The idea is to measure the percentage of lines and execution paths in the code covered by at least one test case. 

**Line coverage** measures the ratio of lines of code that are covered by at least a single test.

**Function coverage** criteria is simply how many of your functions are under test. The value of function coverage is in identifying functions that aren’t tested at all, even if you have a high value for the other types of code coverage.

**Branch coverage (or decision coverage).** A branch can occur because of an if statement, of course, but switch-case statements, loops, catch blocks and other boolean expressions also create branches.
