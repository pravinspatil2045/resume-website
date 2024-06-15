document.addEventListener('DOMContentLoaded', () => {
    const experienceList = document.getElementById('experience-list');
    const projectsList = document.getElementById('projects-list');

    const experiences = [
        {
            company: 'NextGen Healthcare',
            role: 'Engineer II',
            duration: 'Oct 2021 to Present',
            responsibilities: [
                'Developed scalable web applications using Java, Spring Boot, and React.',
                'Led a team of 5 engineers, mentoring and guiding them through various projects.',
                'Implemented CI/CD pipelines using Jenkins and Docker.',
            ]
        },
        {
            company: 'Mitel',
            role: 'Senior Associate Software Developer',
            duration: 'Mar 2021 to Sep 2021',
            responsibilities: [
                'Worked on RESTful APIs with Spring Boot and Hibernate.',
                'Built responsive front-end applications using HTML, CSS, and JavaScript.',
                'Collaborated with cross-functional teams to design and launch new features.',
            ],
        },
        {
            company: 'Mitel',
            role: 'Associate Software Developer',
            duration: 'Apr 2019 to Mar 2021',
            responsibilities: [
                'Worked on RESTful APIs with Spring Boot and Hibernate.',
                'Built responsive front-end applications using HTML, CSS, and JavaScript.',
                'Collaborated with cross-functional teams to design and launch new features.',
            ],
        }
    ];

    const projects = [
        {
            name: 'Project Management System',
            description: 'A web application for managing projects and tasks, built with Java, Spring Boot, and Angular.',
            link: '#'
        },
        {
            name: 'E-commerce Platform',
            description: 'Developed a full-featured e-commerce platform using Java, Spring Boot, and React.',
            link: '#'
        }
    ];

    experiences.forEach(exp => {
        const expDiv = document.createElement('div');
        expDiv.className = 'experience-item';
        expDiv.innerHTML = `
            <h3>${exp.company}</h3>
            <p><strong>Role:</strong> ${exp.role}</p>
            <p><strong>Duration:</strong> ${exp.duration}</p>
            <ul>
                ${exp.responsibilities.map(res => `<li>${res}</li>`).join('')}
            </ul>
        `;
        experienceList.appendChild(expDiv);
    });

    projects.forEach(proj => {
        const projDiv = document.createElement('div');
        projDiv.className = 'project-item';
        projDiv.innerHTML = `
            <h3>${proj.name}</h3>
            <p>${proj.description}</p>
            <p><a href="${proj.link}" target="_blank">View Project</a></p>
        `;
        projectsList.appendChild(projDiv);
    });
});
