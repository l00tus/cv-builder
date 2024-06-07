# CV Builder

A website that generates a resume without the need of any coding.
<br>
<br>
Enter your info, press <kbd>Save</kbd> and then <kbd>Preview</kbd> to preview your resume.
<br>
After you've finished, you can download your resume as PDF or TeX. Additionally, you can store it to your own account.

![pula](https://andrewstephen.xyz/lotus1.png)

## Running locally

Make sure you have these installed:
* Python
* LaTeX

Run this command
```[console]
pip install -r requirements.txt
```

Run this script to setup the databases
```[console]
python static/scripts/setup_dbs.py
```

Clone this repository and run this command
```[console]
python app.py
```

This will start the app on https://localhost:5000

## Credits

This project was inspired by [Saad Quadri](https://github.com/saadq)'s [resumake.io](https://github.com/saadq/resumake.io).

Thanks to the creators of the template used:
* [Rensselaer Career Development Center](https://www.rpi.edu/dept/arc/training/latex/resumes/)
