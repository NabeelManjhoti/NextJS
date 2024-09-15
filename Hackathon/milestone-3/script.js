var form = document.getElementById('resume-form');
var resumeContent = document.getElementById('resume-content');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    // Fetch form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var education = document.getElementById('education').value;
    var workExperience = document.getElementById('work-experience').value;
    var skills = document.getElementById('skills').value;
    // Generate dynamic resume
    resumeContent.innerHTML = "\n        <h2>".concat(name, "'s Resume</h2>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Education:</strong></p>\n        <p>").concat(education, "</p>\n        <p><strong>Work Experience:</strong></p>\n        <p>").concat(workExperience, "</p>\n        <p><strong>Skills:</strong> ").concat(skills, "</p>\n    ");
});
