const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeContent = document.getElementById('resume-content') as HTMLElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    // Fetch form values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const workExperience = (document.getElementById('work-experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;

    // Generate dynamic resume
    resumeContent.innerHTML = `
        <h2>${name}'s Resume</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Education:</strong></p>
        <p>${education}</p>
        <p><strong>Work Experience:</strong></p>
        <p>${workExperience}</p>
        <p><strong>Skills:</strong> ${skills}</p>
    `;
});
