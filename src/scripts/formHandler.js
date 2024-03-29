let jobCounter = 1;

function showForm(formName) {
    const formContainer = document.querySelector('.info');
    let formContent = "";

    switch (formName) {
        case "profile":
            formContent = `
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
            `;
            break;

        case "education":
            formContent = `
            <h2>YOUR EDUCATIONAL BACKGROUND</h2>

            <div class="form-group">
                <label for="name">School Name</label>
                <input type="text" id="name" name="name" placeholder="National University of Science and Technology Bucharest" autocomplete="off">
            </div>
            <div class="form-group">
                <label for="location">School Location</label>
                <input type="text" id="location" name="location" placeholder="Bucharest, Romania" autocomplete="off">
            </div>
            <div class="form-group">
                <label for="degree">Degree</label>
                <input type="text" id="degree" name="degree" placeholder="Bachelor's Degree" autocomplete="off">
            </div>
            <div class="form-group">
                <label for="field">Field of Study</label>
                <input type="text" id="field" name="field" placeholder="Computer Science" autocomplete="off">
            </div>
            <div class="form-group">
                <label for="start-date">Start Date</label>
                <input type="text" id="start-date" name="start-date" placeholder="Oct 2023" autocomplete="off">
            </div>
            <div class="form-group">
                <label for="end-date">End Date</label>
                <input type="text" id="end-date" name="end-date" placeholder="Jun 2027" autocomplete="off">
            </div>
            `;
            break;
        
        case "experience":
            formContent = `<h2>YOUR WORK EXPERIENCE</h2>
            <div class="form-container">
                <div class="form-group">
                    <label for="heading">Section Heading</label>
                    <input type="text" id="heading" name="heading" placeholder="Work Experience" autocomplete="off">
                </div>
                <div class="job-group">
                    <hr>
                    <div class="form-group">
                        <label for="name">Company Name</label>
                        <input type="text" id="name" name="name" placeholder="Google" autocomplete="off">
                    </div>
                    <div class="form-group">
                        <label for="title">Job Title</label>
                        <input type="text" id="title" name="title" placeholder="Software Engineer" autocomplete="off">
                    </div>
                    <div class="form-group">
                        <label for="location">Job Location</label>
                        <input type="text" id="location" name="location" placeholder="London, UK" autocomplete="off">
                    </div>
                    <div class="form-group">
                        <label for="start-date">Start Date</label>
                        <input type="text" id="start-date" name="start-date" placeholder="Oct 2023" autocomplete="off">
                    </div>
                    <div class="form-group">
                        <label for="end-date">End Date</label>
                        <input type="text" id="end-date" name="end-date" placeholder="Jun 2027" autocomplete="off">
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
            `;
            break;
            
        default:
            formContent = `<p>Form not found</p>`;
    }

    formContainer.innerHTML = formContent;
}

function addResponsibility(jobCount) {
    const responsibilitiesContainer = document.querySelector(`.responsibilities-${jobCount}`);
    const newResponsibility = document.createElement('input');
    newResponsibility.type = 'text';
    newResponsibility.name = `responsibility-${jobCount}`;
    newResponsibility.placeholder = 'Did cool stuff';
    newResponsibility.autocomplete = 'off';

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
    const jobContainer = document.querySelector('.form-container');
    
    const jobGroup = document.createElement('div');
    jobGroup.classList.add('job-group');

    jobCounter++;

    jobGroup.innerHTML = `<hr>
    <div class="form-group">
        <label for="name">Company Name</label>
        <input type="text" id="name" name="name" placeholder="Google" autocomplete="off">
    </div>
    <div class="form-group">
        <label for="title">Job Title</label>
        <input type="text" id="title" name="title" placeholder="Software Engineer" autocomplete="off">
    </div>
    <div class="form-group">
        <label for="location">Job Location</label>
        <input type="text" id="location" name="location" placeholder="London, UK" autocomplete="off">
    </div>
    <div class="form-group">
        <label for="start-date">Start Date</label>
        <input type="text" id="start-date" name="start-date" placeholder="Oct 2023" autocomplete="off">
    </div>
    <div class="form-group">
        <label for="end-date">End Date</label>
        <input type="text" id="end-date" name="end-date" placeholder="Jun 2027" autocomplete="off">
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
    const jobContainer = document.querySelector('.form-container');
    
    if(jobCounter > 1) {
        const lastJob = jobContainer.lastElementChild;
        lastJob.remove();
        jobCounter--;
    }
}