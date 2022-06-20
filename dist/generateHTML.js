const generateHTML = (employeeList = []) =>

  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Team Profile Generator</title>
  </head>
  <body>
  <div class = " text-center p-3 bg-primary text-white">
    <h1>MY TEAM</h1>
  </div>  
  <div class="container">
  <div class="row">
   ${insertlist(employeeList)}
  </div>
  </div>
</div>
</body>
</html>`;



const insertlist = (employeeList) => {
  let employeeHtml = "";
  employeeList.forEach(person => {
    employeeHtml = employeeHtml.concat(
      `<div class="col-sm-3 m-4 p-3 ">
      <div class="card m-1 shadow" style="width: 18rem">
      <div class='card-header bg-info'>
        <h3 class="card-title">${person.getName()}</h3>
        <h5 class="card-text"><i class="fa fa-laptop"></i> ${person.getRole()}</h6>
      </div>
      <div class="card-body bg-secondary">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${person.getId()}</li>
          <li class="list-group-item">Email: ${createAncor(person.getEmail())}</li>
          <li class="list-group-item">${getPerson(person)}</li>
        </ul>
      </div>
    </div>
    </div>`
    )
  })
  return employeeHtml;
}
const createAncor = (title) => {
  return `<a href="">${title}</a>`
}

const getPerson = (person) => {
  if (person.getRole() === "Manager") {
    return "Office number: " + person.officeNumber;
  }
  else if (person.getRole() === "Engineer") {
    return "Github: " + createAncor(person.github);
  }
  else {
    return "School: " + person.school;
  }
}


module.exports = generateHTML;