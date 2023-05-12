
let users = [];


function addUser(event) {
  event.preventDefault();


  const name = document.getElementById("name").value;
  const id = document.getElementById("id").value;
  const country = document.getElementById("country").value;
  const language = document.getElementById("language").value;

 
  const user = {
    name,
    id,
    country,
    language
  };

  
  users.push(user);

 
  document.getElementById("name").value = "";
  document.getElementById("id").value = "";
  document.getElementById("country").value = "";
  document.getElementById("language").value = "";

 
  updateUserTable();
}


function deleteUser(index) {

  users.splice(index, 1);

 
  updateUserTable();
}


function updateUserTable() {

  const tableBody = document.getElementById("userTableBody");


  tableBody.innerHTML = "";


  users.forEach(function (user) {
    const newRow = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = user.name;
    newRow.appendChild(nameCell);

    const idCell = document.createElement("td");
    idCell.textContent = user.id;
    newRow.appendChild(idCell);

    const countryCell = document.createElement("td");
    countryCell.textContent = user.country;
    newRow.appendChild(countryCell);

    const languageCell = document.createElement("td");
    languageCell.textContent = user.language;
    newRow.appendChild(languageCell);

    const actionCell = document.createElement("td");
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
      deleteUser(users.indexOf(user));
    });
    actionCell.appendChild(deleteButton);
    newRow.appendChild(actionCell);

   
    tableBody.appendChild(newRow);
  });
}


document.getElementById("registrationForm").addEventListener("submit", addUser);
