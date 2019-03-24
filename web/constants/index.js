
export const SITE_ROOT = process.env.NODE_ENV == 'production' ? 'https://education.setlife.network/' : 'http://localhost:3000';


export const NAVIGATION = {
    items: [

    ]
}


// TODO Remove mock data and make a course entity
export const COURSES = [{
    name: 'Fundamentals of Software',
    version: 'Version 1.0',
    description: 'This course is best suited for newcomers to the world of programming.\n\n                            In Part 1, student will establish a foundational understanding of the basic logical principles that govern the behavior of a program\n\n                            Part 2 will feature actual coding  and language-specific syntax and should only be introduced after the fundamental foundation has been set. This will help students reinforce these principles in practice and start building  a familiarity for reading and writing source code.'
},
{
    name: 'Discovering & Verifying Digital Information',
    version: 'Coming Soon',
    description: 'This course is aimed at improving students\' ability to discover and verify digital information. As the virtually limitless amount of information available on the internet continues to grow into new forms and sizes, one of the most critical components of software literacy includes becoming proficient in finding high quality information. This demands a strong scientific methodology for ensuring that corrupted information is not incorporated into your work and research.'
},
{
    name: 'Project Planning & Development',
    version: 'Coming Soon',
    description: 'This course provides key insights for those who have specialized their skillset in design, marketing, or programming and want to gain a more holistic understanding of the software development process. Project managers may also find some of the material helpful for reinforcing their knowledge and adapting parts of their own management methods.'
},
{
    name: 'Cybersecurity, Blockchains, & Trusted Computing',
    version: 'Coming Soon',
    description: 'Part 1 will teach basic ways to assess exposure to common risks that affect anyone using the software of the Internet.\n\n Part 2 will dive deeper into the more specific vulnerabilities currently present in critical components of Internet infrastructure, introducing blockchain as a networking protocol and outlining the general principles that govern any trusted relationships required for different kinds of computing.'
}
]
