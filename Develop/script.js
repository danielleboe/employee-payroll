// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');


// Collect employee data

const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  const employees = []; //declare employee variables as an array

  while (true) {
    const firstName = prompt('Employee First Name:'); //prompt for first name
    if (!firstName) break; // Exit loop if user cancels or leaves field empty

    const lastName = prompt('Employee Last Name:'); //prompt for last name
    const salaryInput = prompt('Employee Salary:'); //prompt for salary
    const salary = isNaN(parseFloat(salaryInput)) ? 0 : parseFloat(salaryInput); //clean salary value entered

    employees.push({ //method to add the firstName, lastName, and salary to the employees array declared above "const employees = [];"
      firstName: firstName,
      lastName: lastName,
      salary: salary
    }); // push the values to the html/front end

    const continueAdding = confirm('Do you want to add another employee?');
    if (!continueAdding) break; // Exit loop if user cancels or selects "No"
  }

  return employees;



};

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
    const totalSalary = employeesArray.reduce((acc, employee) => acc + employee.salary, 0);  //declare totalSalary constant variable that takes the value of the total employee salary and adds in the new value with each new record (continuing sum of employeeArray). 0 = the initial value of the accumulator
    const averageSalary = totalSalary / employeesArray.length; //creaate averageSalary variable that  determines the average value
    console.log(`The average employee salary between our ${employeesArray.length} employee(s) is $${averageSalary.toFixed(2)}.`); //write to console - and insert the values dynamically - round averagesalary to 2 decimals
  };

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee

  
    const randomIndex = Math.floor(Math.random() * employeesArray.length); //select random index rounded down to nearest integer
    const randomEmployee = employeesArray[randomIndex];
  
    console.log(`Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`); //random employee message displayed in console
  };

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee in the table
      //question: Why use createElement separately instead of innerHTML with an array?
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button 
addEmployeesBtn.addEventListener('click', trackEmployeeData);

//question: why does the code not work if the event listener is at the top under the addemployeesbtn variable assignment?
