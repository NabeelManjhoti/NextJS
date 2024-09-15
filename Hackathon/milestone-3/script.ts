const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeContent = document.getElementById('resume-content') as HTMLElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    // Fetch form values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value.split(',');
    const workExperience = (document.getElementById('work-experience') as HTMLTextAreaElement).value.split(',');
    const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');

    // Helper function to create a list from an array of items
    const generateList = (items: string[]) => items.map(item => `<li>${item.trim()}</li>`).join('');

    // Generate dynamic resume
    resumeContent.innerHTML = `
        <h2>${name}'s Resume</h2>
        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Education:</strong></p>
        <ul>${generateList(education)}</ul>

        <p><strong>Work Experience:</strong></p>
        <ul>${generateList(workExperience)}</ul>

        <p><strong>Skills:</strong></p>
        <ul>${generateList(skills)}</ul>
    `;
});
