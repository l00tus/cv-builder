let educationCounter = 1;
let jobCounter = 1;

const formData = {
  profile: {
    html: `
            <h2>YOUR PERSONAL INFO</h2>

            <div class="form-group">
                    <label for="name">Full Name</label>
                    <input type="text" id="name" name="name" placeholder="John Doe" autocomplete="off">
            </div>
            <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="johndoe@gmail.com" autocomplete="off">
            </div>
            <div class="form-group">
                    <label for="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" placeholder="07xx xxx xxx" autocomplete="off">
            </div>
            <div class="form-group">
                    <label for="location">Location</label>
                    <input type="text" id="location" name="location" placeholder="Bucharest, Romania" autocomplete="off">
            </div>
            <div class="form-group">
                    <label for="site">Link</label>
                    <input type="url" id="site" name="site" placeholder="mycoolportfolio.com/johndoe" autocomplete="off">
            </div>
        `,
    values: {},
  },
  education: {
    html: `
            <h2>YOUR EDUCATIONAL BACKGROUND</h2>
            <div class="form-container">
                <div class="form-group">
                    <label for="heading">Section Heading</label>
                    <input type="text" id="heading" name="heading" placeholder="Education" autocomplete="off">
                </div>
                <div class="education-group">
                    <hr>
                    <div class="form-group">
                        <label for="name-1">School Name</label>
                        <input type="text" id="name-1" name="name-1" placeholder="National University of Science and Technology Bucharest" autocomplete="off">
                    </div>
                    <div class="form-group">
                        <label for="location-1">School Location</label>
                        <input type="text" id="location-1" name="location-1" placeholder="Bucharest, Romania" autocomplete="off">
                    </div>
                    <div class="form-group">
                        <label for="degree-1">Degree</label>
                        <input type="text" id="degree-1" name="degree-1" placeholder="Bachelor's Degree" autocomplete="off">
                    </div>
                    <div class="form-group">
                        <label for="field-1">Field of Study</label>
                        <input type="text" id="field-1" name="field-1" placeholder="Computer Science" autocomplete="off">
                    </div>
                    <div class="form-group">
                        <label for="start-date-1">Start Date</label>
                        <input type="text" id="start-date-1" name="start-date-1" placeholder="Oct 2023" autocomplete="off">
                    </div>
                    <div class="form-group">
                        <label for="end-date-1">End Date</label>
                        <input type="text" id="end-date-1" name="end-date-1" placeholder="Jun 2027" autocomplete="off">
                    </div>
                </div>  
            </div>

            <div class="buttons">
                <button onclick="addSchool()">Add School</button>
                <button onclick="removeSchool()">Remove School</button>
            </div>
        `,
    values: {},
  },
  experience: {
    html: `
            <h2>YOUR WORK EXPERIENCE</h2>
            <div class="form-container">
                <div class="form-group">
                    <label for="heading">Section Heading</label>
                    <input type="text" id="heading" name="heading" placeholder="Work Experience" autocomplete="off">
                </div>
                <div class="job-group">
                    <hr>
                    <div class="form-group">
                        <label for="name-1">Company Name</label>
                        <input type="text" id="name-1" name="name-1" placeholder="Google" autocomplete="off">
                    </div>
                    <div class="form-group">
                        <label for="title-1">Job Title</label>
                        <input type="text" id="title-1" name="title-1" placeholder="Software Engineer" autocomplete="off">
                    </div>
                    <div class="form-group">
                        <label for="location-1">Job Location</label>
                        <input type="text" id="location-1" name="location-1" placeholder="London, UK" autocomplete="off">
                    </div>
                    <div class="form-group">
                        <label for="start-date-1">Start Date</label>
                        <input type="text" id="start-date-1" name="start-date-1" placeholder="Oct 2023" autocomplete="off">
                    </div>
                    <div class="form-group">
                        <label for="end-date-1">End Date</label>
                        <input type="text" id="end-date-1" name="end-date-1" placeholder="Jun 2027" autocomplete="off">
                    </div>
                    <div class="form-group responsibilities-1">
                        <label for="responsibilities-1">Job Responsibilities</label>
                        <button onclick="addResponsibility(1)">+</button>
                        <button onclick="removeResponsibility(1)">-</button>
                        <input type="text" id="responsibilities-1" name="responsibilities-1" placeholder="Did cool stuff" autocomplete="off">
                    </div>
                </div>
            </div>

            <div class="buttons">
                <button onclick="addJob()">Add Job</button>
                <button onclick="removeJob()">Remove Job</button>
            </div>
        `,
    values: {},
  },
  skills: {
    html: "",
    values: {},
  },
  projects: {
    html: "",
    values: {},
  },
  awards: {
    html: "",
    values: {},
  },
};

let currentForm = null;

function saveForm() {
  if (currentForm) {
    const formHtml = document.querySelector(".info").innerHTML;
    const formInputs = document.querySelectorAll(".info input, .info textarea");
    const formValues = {};
    formInputs.forEach((input) => {
      formValues[input.id] = input.value;
    });
    formData[currentForm].html = formHtml;
    formData[currentForm].values = formValues;
  } else {
    alert("Please select a form to save!");
  }
}

function showForm(formName) {
  const formContainer = document.querySelector(".info");
  const formHtml = formData[formName].html;
  const formValues = formData[formName].values;
  formContainer.innerHTML = formHtml;
  for (const inputId in formValues) {
    if (Object.hasOwnProperty.call(formValues, inputId)) {
      const inputValue = formValues[inputId];
      const inputElement = document.getElementById(inputId);
      if (inputElement) {
        inputElement.value = inputValue;
      }
    }
  }
  currentForm = formName;
}

function addResponsibility(jobCount) {
  const responsibilitiesContainer = document.querySelector(
    `.responsibilities-${jobCount}`
  );
  const newResponsibility = document.createElement("input");
  newResponsibility.type = "text";
  newResponsibility.name = `responsibility-${jobCount}`;
  newResponsibility.placeholder = "Did cool stuff";
  newResponsibility.autocomplete = "off";

  responsibilitiesContainer.appendChild(newResponsibility);
}

function removeResponsibility(jobCount) {
  const responsibilitiesContainer = document.querySelector(
    `.responsibilities-${jobCount}`
  );
  const responsibilitiesCount = responsibilitiesContainer.childElementCount;

  if (responsibilitiesCount > 4) {
    const lastResponsibility = responsibilitiesContainer.lastElementChild;
    responsibilitiesContainer.removeChild(lastResponsibility);
  }
}

function addJob() {
  const jobContainer = document.querySelector(".form-container");

  const jobGroup = document.createElement("div");
  jobGroup.classList.add("job-group");

  jobCounter++;

  jobGroup.innerHTML = `<hr>
    <div class="form-group">
        <label for="name-${jobCounter}">Company Name</label>
        <input type="text" id="name-${jobCounter}" name="name-${jobCounter}" placeholder="Google" autocomplete="off">
    </div>
    <div class="form-group">
        <label for="title-${jobCounter}">Job Title</label>
        <input type="text" id="title-${jobCounter}" name="title-${jobCounter}" placeholder="Software Engineer" autocomplete="off">
    </div>
    <div class="form-group">
        <label for="location-${jobCounter}">Job Location</label>
        <input type="text" id="location-${jobCounter}" name="location-${jobCounter}" placeholder="London, UK" autocomplete="off">
    </div>
    <div class="form-group">
        <label for="start-date-${jobCounter}">Start Date</label>
        <input type="text" id="start-date-${jobCounter}" name="start-date-${jobCounter}" placeholder="Oct 2023" autocomplete="off">
    </div>
    <div class="form-group">
        <label for="end-date-${jobCounter}">End Date</label>
        <input type="text" id="end-date-${jobCounter}" name="end-date-${jobCounter}" placeholder="Jun 2027" autocomplete="off">
    </div>
    <div class="form-group responsibilities-${jobCounter}">
        <label for="responsibilities-${jobCounter}">Job Responsibilities</label>
        <button onclick="addResponsibility(${jobCounter})">+</button>
        <button onclick="removeResponsibility(${jobCounter})">-</button>
        <input type="text" id="responsibilities-${jobCounter}" name="responsibilities-${jobCounter}" placeholder="Did cool stuff" autocomplete="off">
    </div>
    `;

  jobContainer.appendChild(jobGroup);
}

function removeJob() {
  const jobContainer = document.querySelector(".form-container");

  if (jobCounter > 1) {
    const lastJob = jobContainer.lastElementChild;
    lastJob.remove();
    jobCounter--;
  }
}

function addSchool() {
    const schoolContainer = document.querySelector(".form-container");
    
    const schoolGroup = document.createElement("div");
    schoolGroup.classList.add("education-group");
    
    educationCounter++;
    
    schoolGroup.innerHTML = `<hr>
        <div class="form-group">
            <label for="name-${educationCounter}">School Name</label>
            <input type="text" id="name-${educationCounter}" name="name-${educationCounter}" placeholder="National University of Science and Technology Bucharest" autocomplete="off">
        </div>
        <div class="form-group">
            <label for="location-${educationCounter}">School Location</label>
            <input type="text" id="location-${educationCounter}" name="location-${educationCounter}" placeholder="Bucharest, Romania" autocomplete="off">
        </div>
        <div class="form-group">
            <label for="degree-${educationCounter}">Degree</label>
            <input type="text" id="degree-${educationCounter}" name="degree-${educationCounter}" placeholder="Bachelor's Degree" autocomplete="off">
        </div>
        <div class="form-group">
            <label for="field-${educationCounter}">Field of Study</label>
            <input type="text" id="field-${educationCounter}" name="field-${educationCounter}" placeholder="Computer Science" autocomplete="off">
        </div>
        <div class="form-group">
            <label for="start-date-${educationCounter}">Start Date</label>
            <input type="text" id="start-date-${educationCounter}" name="start-date-${educationCounter}" placeholder="Oct 2023" autocomplete="off">
        </div>
        <div class="form-group">
            <label for="end-date-${educationCounter}">End Date</label>
            <input type="text" id="end-date-${educationCounter}" name="end-date-${educationCounter}" placeholder="Jun 2027" autocomplete="off">
        </div>
        `;
    
    schoolContainer.appendChild(schoolGroup);
}

function removeSchool() {
    const schoolContainer = document.querySelector(".form-container");
    
    if (educationCounter > 1) {
        const lastSchool = schoolContainer.lastElementChild;
        lastSchool.remove();
        educationCounter--;
    }
}