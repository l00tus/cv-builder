let currentForm = null;

let educationCounter = 1;
let jobCounter = 1;
let skillCounter = 1;
let projectCounter = 1;
let awardCounter = 1;

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
                        <label for="responsibilities-1-1">Job Responsibilities</label>
                        <button onclick="addResponsibility(1)">+</button>
                        <button onclick="removeResponsibility(1)">-</button>
                        <input type="text" id="responsibilities-1-1" name="responsibilities-1-1" placeholder="Did cool stuff" autocomplete="off">
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
    html: `
            <h2>YOUR SKILLS</h2>
            <div class="form-container">
                <div class="form-group">
                    <label for="heading">Section Heading</label>
                    <input type="text" id="heading" name="heading" placeholder="Skills" autocomplete="off">
                </div>
                <div class="skills-group">
                    <hr>
                    <div class="form-group">
                        <label for="name-1">Skill Name</label>
                        <input type="text" id="name-1" name="name-1" placeholder="Programming Languages" autocomplete="off">
                    </div>
                    <div class="form-group details-1">
                        <label for="details-1-1">Skill Details</label>
                        <button onclick="addDetails(1)">+</button>
                        <button onclick="removeDetails(1)">-</button>
                        <input type="text" id="details-1-1" name="details-1-1" placeholder="Java" autocomplete="off">
                    </div>
                </div>
            </div>

            <div class="buttons">
                <button onclick="addSkill()">Add Skill</button>
                <button onclick="removeSkill()">Remove Skill</button>
            </div>
        `,
    values: {},
  },
  projects: {
    html: `
            <h2>YOUR PROJECTS</h2>
            <div class="form-container">
                <div class="form-group">
                    <label for="heading">Section Heading</label>
                    <input type="text" id="heading" name="heading" placeholder="Projects" autocomplete="off">
                </div>
                <div class="project-group">
                    <hr>
                    <div class="form-group">
                        <label for="name-1">Project Name</label>
                        <input type="text" id="name-1" name="name-1" placeholder="CV Builder" autocomplete="off">
                    </div>
                    <div class="form-group">
                        <label for="tech-1">Technologies Used</label>
                        <input type="text" id="tech-1" name="tech-1" placeholder="JavaScript, Python, Flask" autocomplete="off">
                    </div>
                    <div class="form-group">
                        <label for="link-1">Link to Project</label>
                        <input type="url" id="link-1" name="link-1" placeholder="https://bestproject.tech" autocomplete="off">
                    </div>
                    <div class="form-group description-1">
                        <label for="description-1-1">Project Description</label>
                        <button onclick="addDescription(1)">+</button>
                        <button onclick="removeDescription(1)">-</button>
                        <input type="text" id="description-1-1" name="description-1-1" placeholder="Developed a CV Building web application" autocomplete="off">
                    </div>
                </div>
            </div>

            <div class="buttons">
                <button onclick="addProject()">Add Project</button>
                <button onclick="removeProject()">Remove Project</button>
            </div>
        `,
    values: {},
  },
  awards: {
    html: `
            <h2>HONORS & AWARDS</h2>
            <div class="form-container">
                <div class="form-group">
                    <label for="heading">Section Heading</label>
                    <input type="text" id="heading" name="heading" placeholder="Awards" autocomplete="off">
                </div>
                <div class="award-group">
                    <hr>
                    <div class="form-group">
                        <label for="name-1">Award Name</label>
                        <input type="text" id="name-1" name="name-1" placeholder="Tech Wizard" autocomplete="off">
                    </div>
                    <div class="form-group">
                        <label for="date-1">Award Date</label>
                        <input type="text" id="date-1" name="date-1" placeholder="Nov 2023" autocomplete="off">
                    </div>
                    <div class="form-group">
                        <label for="awarder-1">Awarder</label>
                        <input type="text" id="awarder-1" name="awarder-1" placeholder="UNIHack" autocomplete="off">
                    </div>
                    <div class="form-group">
                        <label for="summary-1">Summary</label>
                        <input type="text" id="summary-1" name="summary-1" placeholder="Recognized for creating the coolest website" autocomplete="off">
                    </div>
                </div>
            </div>

            <div class="buttons">
                <button onclick="addAward()">Add Award</button>
                <button onclick="removeAward()">Remove Award</button>
            </div>
        `,
    values: {},
  },
};


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

        const valuesData = {};
        for (const section in formData) {
                if (formData.hasOwnProperty(section)) {
                        valuesData[section] = formData[section].values;
                }
        }

        const countersData = {
            education: educationCounter,
            experience: jobCounter,
            skills: skillCounter,
            projects: projectCounter,
            awards: awardCounter
        };


        const jsonData = JSON.stringify({
            values: valuesData,
            counters: countersData
        });

        fetch('/process-data', {
                method: 'POST',
                headers: {
                        'Content-Type': 'application/json'
                },
                body: jsonData
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));

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
  newResponsibility.id = `responsibilities-${jobCount}-${responsibilitiesContainer.childElementCount - 2}`;
  newResponsibility.name = `responsibility-${jobCount}-${responsibilitiesContainer.childElementCount - 2}`;
  newResponsibility.placeholder = "Did cool stuff";
  newResponsibility.autocomplete = "off";

  responsibilitiesContainer.appendChild(newResponsibility);
}

function removeResponsibility(jobCount) {
  const responsibilitiesContainer = document.querySelector(`.responsibilities-${jobCount}`);
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
        <label for="responsibilities-${jobCounter}-1}">Job Responsibilities</label>
        <button onclick="addResponsibility(${jobCounter})">+</button>
        <button onclick="removeResponsibility(${jobCounter})">-</button>
        <input type="text" id="responsibilities-${jobCounter}-1" name="responsibilities-${jobCounter}-1" placeholder="Did cool stuff" autocomplete="off">
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

function addDetails(detailCount) {
    const detailsContainer = document.querySelector(`.details-${detailCount}`);
    const newDetail = document.createElement("input");
    newDetail.type = "text";
    newDetail.id = `details-${detailCount}-${detailsContainer.childElementCount - 2}`;
    newDetail.name = `detail-${detailCount}-${detailsContainer.childElementCount - 2}`;
    newDetail.placeholder = "Java";
    newDetail.autocomplete = "off";
    
    detailsContainer.appendChild(newDetail);
}

function removeDetails(detailCount) {
    const detailsContainer = document.querySelector(`.details-${detailCount}`);
    const detailsCount = detailsContainer.childElementCount;
    
    if (detailsCount > 4) {
        const lastDetail = detailsContainer.lastElementChild;
        detailsContainer.removeChild(lastDetail);
    }
}

function addSkill() {
    const skillContainer = document.querySelector(".form-container");

    const skillGroup = document.createElement("div");
    skillGroup.classList.add("skill-group");

    skillCounter++;

    skillGroup.innerHTML = `<hr>
        <div class="form-group">
            <label for="name-${skillCounter}">Skill Name</label>
            <input type="text" id="name-${skillCounter}" name="name-${skillCounter}" placeholder="Programming Languages" autocomplete="off">
        </div>
        <div class="form-group details-${skillCounter}">
            <label for="details-${skillCounter}-1">Skill Details</label>
            <button onclick="addDetails(${skillCounter})">+</button>
            <button onclick="removeDetails(${skillCounter})">-</button>
            <input type="text" id="details-${skillCounter}-1" name="details-${skillCounter}-1" placeholder="Java" autocomplete="off">
        </div>
        `;

    skillContainer.appendChild(skillGroup);
}

function removeSkill() {
    const skillContainer = document.querySelector(".form-container");

    if (skillCounter > 1) {
        const lastSkill = skillContainer.lastElementChild;
        lastSkill.remove();
        skillCounter--;
    }
}

function addAward() {
    const awardContainer = document.querySelector(".form-container");

    const awardGroup = document.createElement("div");
    awardGroup.classList.add("award-group");

    awardCounter++;

    awardGroup.innerHTML = `<hr>
        <div class="form-group">
            <label for="name-${awardCounter}">Award Name</label>
            <input type="text" id="name-${awardCounter}" name="name-${awardCounter}" placeholder="Tech Wizard" autocomplete="off">
        </div>
        <div class="form-group">
            <label for="date-${awardCounter}">Award Date</label>
            <input type="text" id="date-${awardCounter}" name="date-${awardCounter}" placeholder="Nov 2023" autocomplete="off">
        </div>
        <div class="form-group">
            <label for="awarder-${awardCounter}">Awarder</label>
            <input type="text" id="awarder-${awardCounter}" name="awarder-${awardCounter}" placeholder="UNIHack" autocomplete="off">
        </div>
        <div class="form-group">
            <label for="summary-${awardCounter}">Summary</label>
            <input type="text" id="summary-${awardCounter}" name="summary-${awardCounter}" placeholder="Recognized for creating the coolest website" autocomplete="off">
        </div>
        `;

    awardContainer.appendChild(awardGroup);
}

function removeAward() {
    const awardContainer = document.querySelector(".form-container");

    if (awardCounter > 1) {
        const lastAward = awardContainer.lastElementChild;
        lastAward.remove();
        awardCounter--;
    }
}

function addDescription(descriptionCount) {
    const descriptionContainer = document.querySelector(`.description-${descriptionCount}`);
    const newDescription = document.createElement("input");
    newDescription.type = "text";
    newDescription.id = `description-${descriptionCount}-${descriptionContainer.childElementCount - 2}`;
    newDescription.name = `description-${descriptionCount}-${descriptionContainer.childElementCount - 2}`;
    newDescription.placeholder = "Developed a CV Building web application";
    newDescription.autocomplete = "off";

    descriptionContainer.appendChild(newDescription);
}

function removeDescription(descriptionCount) {
    const descriptionContainer = document.querySelector(`.description-${descriptionCount}`);
    const descriptionsCounter = descriptionContainer.childElementCount;

    if (descriptionsCounter > 4) {
        const lastDescription = descriptionContainer.lastElementChild;
        descriptionContainer.removeChild(lastDescription);
    }
}

function addProject() {
    const projectContainer = document.querySelector(".form-container");

    const projectGroup = document.createElement("div");
    projectGroup.classList.add("project-group");

    projectCounter++;

    projectGroup.innerHTML = `<hr>
        <div class="form-group">
            <label for="name-${projectCounter}">Project Name</label>
            <input type="text" id="name-${projectCounter}" name="name-${projectCounter}" placeholder="CV Builder" autocomplete="off">
        </div>
        <div class="form-group">
            <label for="tech-${projectCounter}">Technologies Used</label>
            <input type="text" id="tech-${projectCounter}" name="tech-${projectCounter}" placeholder="JavaScript, Python, Flask" autocomplete="off">
        </div>
        <div class="form-group">
            <label for="link-${projectCounter}">Link to Project</label>
            <input type="url" id="link-${projectCounter}" name="link-${projectCounter}" placeholder="https://bestproject.tech" autocomplete="off">  
        </div>
        <div class="form-group description-${projectCounter}">
            <label for="description-${projectCounter}-1">Project Description</label>
            <button onclick="addDescription(${projectCounter})">+</button>
            <button onclick="removeDescription(${projectCounter})">-</button>
            <input type="text" id="description-${projectCounter}-1" name="description-${projectCounter}-1" placeholder="Developed a CV Building web application" autocomplete="off">
        </div>
        `;

    projectContainer.appendChild(projectGroup);
}

function removeProject() {
    const projectContainer = document.querySelector(".form-container");

    if (projectCounter > 1) {
        const lastProject = projectContainer.lastElementChild;
        lastProject.remove();
        projectCounter--;
    }
}