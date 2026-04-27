// app.js — Week 3: JavaScript takes over the job list

// --- 1. Data: the job list as an array of objects ---
const jobs = [
    {
        id: 1,
        title: 'Frontend Developer',
        company: 'Acme Corp',
        location: 'Bangkok',
        type: 'Full-time',
    },
    {
        id: 2,
        title: 'Backend Engineer',
        company: 'StartupTH',
        location: 'Remote',
        type: 'Full-time',
    },
    {
        id: 3,
        title: 'Junior Web Developer',
        company: 'Digital Agency BKK',
        location: 'Bangkok',
        type: 'Part-time',
    },
    {
        id: 4,
        title: 'Full Stack Developer',
        company: 'FinTech Co',
        location: 'Chiang Mai',
        type: 'Full-time',
    },
    {
        id: 5,
        title: 'DevOps Engineer',
        company: 'CloudBase TH',
        location: 'Remote',
        type: 'Contract',
    },
]

// --- 2. A function that renders jobs into the DOM ---
// Notice: the function takes jobs as a parameter — it does not
// reach for the global array directly. This makes it reusable.
function renderJobs(jobList) {
    const container = document.querySelector('#jobs-list')

    // .map() transforms each job object into an HTML string.
    // .join('') collapses the array of strings into one string.
    container.innerHTML = jobList
        .map(
            (job) => `
      <li class="job-card" data-job-id="${job.id}">
        <h2 class="job-title">${job.title}</h2>
        <p class="job-meta">${job.company} &middot; ${job.location} &middot; ${job.type}</p>
      </li>
    `,
        )
        .join('')
}

// --- 3. A class to model a job (used in Week 8 with Mongoose) ---
// For now, it is just good practice — classes make the shape explicit.
class Job {
    constructor(title, company, location, type) {
        this.title = title
        this.company = company
        this.location = location
        this.type = type
    }

    // A method — shared behavior attached to every Job instance
    getSummary() {
        return `${this.title} at ${this.company} (${this.location})`
    }
}

// --- 4. Run it ---
renderJobs(jobs)

// Test the class in the browser console:
// const j = new Job('Developer', 'Acme', 'Bangkok', 'Full-time')
// console.log(j.getSummary())
