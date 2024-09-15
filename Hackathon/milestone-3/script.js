var form = document.getElementById('resume-form');
var resumeContent = document.getElementById('resume-content');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    // Fetch form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var education = document.getElementById('education').value.split(',');
    var workExperience = document.getElementById('work-experience').value.split(',');
    var skills = document.getElementById('skills').value.split(',');
    // Helper function to create a list from an array of items
    var generateList = function (items) { return items.map(function (item) { return "<li>".concat(item.trim(), "</li>"); }).join(''); };
    // Generate dynamic resume
    resumeContent.innerHTML = "\n        <h2>".concat(name, "'s Resume</h2>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n\n        <p><strong>Education:</strong></p>\n        <ul>").concat(generateList(education), "</ul>\n\n        <p><strong>Work Experience:</strong></p>\n        <ul>").concat(generateList(workExperience), "</ul>\n\n        <p><strong>Skills:</strong></p>\n        <ul>").concat(generateList(skills), "</ul>\n    ");
});
