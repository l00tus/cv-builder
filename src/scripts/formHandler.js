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
        default:
            formContent = `<p>Form not found</p>`;
    }

    formContainer.innerHTML = formContent;
}