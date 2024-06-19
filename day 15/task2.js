var contentContainer = document.createElement("div")
contentContainer.setAttribute("class","container")
document.body.appendChild(contentContainer)


// Assuming your existing form variable reference

var form = document.getElementById("form");
contentContainer.appendChild(form)

// Create an h1 element for the title
var titleElement = document.createElement("h1");
titleElement.innerText = "DOM Manipulation With Forms"; // Replace with your desired title
titleElement.setAttribute("id", "title");
form.appendChild(titleElement);

// Create a p element for the description
var descriptionElement = document.createElement("p");
descriptionElement.innerText = "."; // Replace with your desired description
descriptionElement.setAttribute("id", "description");
form.appendChild(descriptionElement);

var container = document.createElement("div");
container.setAttribute("class", "form-group");
form.appendChild(container);

// First Name
var label1 = document.createElement("label");
label1.innerText = "First Name:";
label1.setAttribute("for", "first-name");
container.appendChild(label1);

var input1 = document.createElement("input");
input1.setAttribute("type", "text");
input1.setAttribute(
  "style",
  "width:100%;height:30px;margin-bottom:20px;border-radius:5px;"
);
input1.setAttribute("id", "first-name");
input1.setAttribute("name", "first-name"); // Set name attribute for form submission
input1.setAttribute("required", ""); // Add required attribute for HTML5 validation
input1.setAttribute("placeholder", "Enter your first name"); // Add placeholder text
container.appendChild(input1);

// Last Name
var label2 = document.createElement("label");
label2.innerText = " Last Name:";
label2.setAttribute("for", "last-name");
container.appendChild(label2);

var input2 = document.createElement("input");
input2.setAttribute("type", "text");
input2.setAttribute(
  "style",
  "width:100%;height:30px;margin-bottom:20px;border-radius:5px;"
);
input2.setAttribute("id", "last-name");
input2.setAttribute("name", "last-name"); // Set name attribute for form submission
input2.setAttribute("required", ""); // Add required attribute for HTML5 validation
input2.setAttribute("placeholder", "Enter your last name"); // Add placeholder text
container.appendChild(input2);

// Email
var label3 = document.createElement("label");
label3.innerText = " Email:";
label3.setAttribute("for", "email");
container.appendChild(label3);

var input3 = document.createElement("input");
input3.setAttribute("type", "email");
input3.setAttribute(
  "style",
  "width:100%;height:30px;margin-bottom:20px;border-radius:5px;"
);
input3.setAttribute("id", "email");
input3.setAttribute("name", "email"); // Set name attribute for form submission
input3.setAttribute("required", ""); // Add required attribute for HTML5 validation
input3.setAttribute("placeholder", "Enter your email address"); // Add placeholder text
container.appendChild(input3);

// Address
var label4 = document.createElement("label");
label4.innerText = " Address:";
label4.setAttribute("for", "address");
container.appendChild(label4);

var textarea = document.createElement("textarea");
textarea.setAttribute("id", "address");
textarea.setAttribute("name", "address"); // Set name attribute for form submission
textarea.setAttribute(
  "style",
  "width:100%;height:100px;margin-bottom:20px;border-radius:5px;"
);
textarea.setAttribute("required", ""); // Add required attribute for HTML5 validation
textarea.setAttribute("placeholder", "Enter your full address"); // Add placeholder text
container.appendChild(textarea);

// Pincode
var label5 = document.createElement("label");
label5.innerText = " Pincode:";
label5.setAttribute("for", "pincode");
container.appendChild(label5); // Append label directly to the form element

var input4 = document.createElement("input");
input4.setAttribute("type", "text");
input4.setAttribute(
  "style",
  "width:100%;height:30px;margin-bottom:20px;border-radius:5px;"
);
input4.setAttribute("id", "pincode");
input4.setAttribute("name", "pincode"); // Set name attribute for form submission
input4.setAttribute("required", ""); // Add required attribute for HTML5 validation
input4.setAttribute("placeholder", "Enter your pincode"); // Add placeholder text
container.appendChild(input4); // Append the input directly to the form element

// Gender (Radio Buttons)
var genderLabel = document.createElement("p");
genderLabel.innerText = "Gender:";
container.appendChild(genderLabel);

var radioMale = document.createElement("input");
radioMale.setAttribute("type", "radio");
radioMale.setAttribute("id", "gender-male");
radioMale.setAttribute("name", "gender");
radioMale.setAttribute("value", "male");
container.appendChild(radioMale);

var labelMale = document.createElement("label");
labelMale.setAttribute("for", "gender-male");
labelMale.innerText = " Male";
container.appendChild(labelMale);

var radioFemale = document.createElement("input");
radioFemale.setAttribute("type", "radio");
radioFemale.setAttribute("id", "gender-female");
radioFemale.setAttribute("name", "gender");
radioFemale.setAttribute("value", "female");
container.appendChild(radioFemale);

var labelFemale = document.createElement("label");
labelFemale.setAttribute("for", "gender-female");
labelFemale.innerText = " Female";
container.appendChild(labelFemale);

// Food Options (Checkboxes)
var foodLabel = document.createElement("p");
foodLabel.innerText = "Select exactly 2 foods:";
container.appendChild(foodLabel);

var checkboxPizza = document.createElement("input");
checkboxPizza.setAttribute("type", "checkbox");
checkboxPizza.setAttribute("id", "food-pizza");
checkboxPizza.setAttribute("name", "food");
checkboxPizza.setAttribute("value", "pizza");
container.appendChild(checkboxPizza);

var labelPizza = document.createElement("label");
labelPizza.setAttribute("for", "food-pizza");
labelPizza.innerText = " Pizza";
container.appendChild(labelPizza);

var checkboxBurger = document.createElement("input");
checkboxBurger.setAttribute("type", "checkbox");
checkboxBurger.setAttribute("id", "food-burger");
checkboxBurger.setAttribute("name", "food");
checkboxBurger.setAttribute("value", "burger");
container.appendChild(checkboxBurger);

var labelBurger = document.createElement("label");
labelBurger.setAttribute("for", "food-burger");
labelBurger.innerText = " Burger";
container.appendChild(labelBurger);

var checkboxpasta = document.createElement("input");
checkboxpasta.setAttribute("type", "checkbox");
checkboxpasta.setAttribute("id", "food-pasta");
checkboxpasta.setAttribute("name", "food");
checkboxpasta.setAttribute("value", "pasta");
container.appendChild(checkboxpasta);

var labelpasta = document.createElement("label");
labelpasta.setAttribute("for", "food-pasta");
labelpasta.innerText = " pasta";
container.appendChild(labelpasta);

var checkboxsalad = document.createElement("input");
checkboxsalad.setAttribute("type", "checkbox");
checkboxsalad.setAttribute("id", "food-salad");
checkboxsalad.setAttribute("name", "food");
checkboxsalad.setAttribute("value", "salad");
container.appendChild(checkboxsalad);

var labelsalad = document.createElement("label");
labelsalad.setAttribute("for", "food-salad");
labelsalad.innerText = " salad";
container.appendChild(labelsalad);

var checkboxsushi = document.createElement("input");
checkboxsushi.setAttribute("type", "checkbox");
checkboxsushi.setAttribute("id", "food-sushi");
checkboxsushi.setAttribute("name", "food");
checkboxsushi.setAttribute("value", "sushi");
container.appendChild(checkboxsushi);

var labelsushi = document.createElement("label");
labelsushi.setAttribute("for", "food-sushi");
labelsushi.innerText = " sushi";
container.appendChild(labelsushi);

// Instructional Messages
var foodInstruction = document.createElement("p");
foodInstruction.innerText = "Please select exactly 2 food options.";
container.appendChild(foodInstruction);

var label6 = document.createElement("label");
label6.innerText = " State:";
label6.setAttribute("for", "state");
container.appendChild(label6); // Append label directly to the form element

var input5 = document.createElement("input");
input5.setAttribute("type", "text");
input5.setAttribute(
  "style",
  "width:100%;height:30px;margin-bottom:20px;border-radius:5px;"
);
input5.setAttribute("id", "state");
input5.setAttribute("name", "state"); // Set name attribute for form submission
input5.setAttribute("required", ""); // Add required attribute for HTML5 validation
input5.setAttribute("placeholder", "Enter your state"); // Add placeholder text
container.appendChild(input5);

var label7 = document.createElement("label");
label7.innerText = " Country:";
label7.setAttribute("for", "country");
container.appendChild(label7); // Append label directly to the form element

var input6 = document.createElement("input");
input6.setAttribute("type", "text");
input6.setAttribute(
  "style",
  "width:100%;height:30px;margin-bottom:20px;border-radius:5px;"
);
input6.setAttribute("id", "country");
input6.setAttribute("name", "country"); // Set name attribute for form submission
input6.setAttribute("required", ""); // Add required attribute for HTML5 validation
input6.setAttribute("placeholder", "Enter your country"); // Add placeholder text
container.appendChild(input6);

// Submit Button
var submitButton = document.createElement("button");
submitButton.innerText = "Submit";
submitButton.setAttribute("id", "submit"); // Ensure the id attribute is set to "submit"
submitButton.setAttribute("type", "submit");
submitButton.classList.add("btn", "btn-primary"); // Add the classes "btn" and "btn-primary" for styling
submitButton.setAttribute(
  "style",
  "width:100px;height:30px;margin-bottom:20px;border-radius:5px;background:green;border:none;"
);
container.appendChild(submitButton); // Append the submit button to the container

// Form Submission Handler
// Assuming your existing form variable reference


// Form Submission Handler
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Get values from the input fields
    var firstName = document.getElementById("first-name").value.trim();
    var lastName = document.getElementById("last-name").value.trim();
    var email = document.getElementById("email").value.trim();
    var address = document.getElementById("address").value.trim();
    var pincode = document.getElementById("pincode").value.trim();
    var state = document.getElementById("state").value.trim();
    var country = document.getElementById("country").value.trim();

    // Validate if required fields are not empty
    if (!firstName || !lastName || !email || !address || !pincode || !state || !country) {
        alert("Please fill in all required fields");
        return;
    }

    // Validate gender selection
    var gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        alert("Please select a gender");
        return;
    }

    // Validate food selection (exactly 2 foods)
    var selectedFoods = document.querySelectorAll('input[name="food"]:checked');
    if (selectedFoods.length !== 2) {
        alert("Please select exactly 2 foods");
        return;
    }

    // Create a new row in the table
    var tableBody = document.getElementById("detailsTableBody");
    var newRow = document.createElement("tr");

    // Populate the new row with table data cells (td)
    newRow.innerHTML = `
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${email}</td>
        <td>${address}</td>
        <td>${pincode}</td>
        <td>${gender.value}</td>
        <td>${Array.from(selectedFoods).map(checkbox => checkbox.value).join(', ')}</td>
        <td>${state}</td>
         <td>${country}</td>
    `;

    // Append the new row to the table body
    tableBody.appendChild(newRow);

    // Clear input fields after saving
    form.reset();

    // Clear radio buttons and checkboxes
    gender.checked = false;
    selectedFoods.forEach(function (checkbox) {
        checkbox.checked = false;
    });
});
