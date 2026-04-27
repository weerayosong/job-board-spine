// app.js — Week 4: replace the hardcoded array with a real fetch call

// We will mock the API response locally for now.
// In Week 6, this URL will point to your Express server.
const API_URL = 'https://jsonplaceholder.typicode.com/posts?_limit=5'

// --- Async function to fetch jobs ---
// The 'async' keyword means this function always returns a Promise.
// Inside it, 'await' pauses execution until the Promise resolves.
async function fetchJobs() {
    const response = await fetch(API_URL)

    // fetch() only rejects on network failure — not on 404 or 500.
    // Check response.ok to catch HTTP error status codes.
    if (!response.ok) {
        throw new Error(`Failed to load jobs: ${response.status}`)
    }

    // .json() is also async — it reads and parses the response body.
    const data = await response.json()
    return data
}

// --- Render function (same as Week 3) ---
function renderJobs(jobs) {
    const container = document.querySelector('#jobs-list')
    container.innerHTML = jobs
        .map(
            (job) => `
      <li class="job-card">
        <h2 class="job-title">${job.title}</h2>
        <p class="job-meta">Post #${job.id}</p>
      </li>
    `,
        )
        .join('')
}

// --- Error state ---
function renderError(message) {
    const container = document.querySelector('#jobs-list')
    container.innerHTML = `<li class="error-message">${message}</li>`
}

// --- Entry point: load and render on page load ---
// try/catch ensures errors surface visibly instead of silently failing.
async function init() {
    try {
        const jobs = await fetchJobs()
        renderJobs(jobs)
    } catch (error) {
        console.error(error)
        renderError('Could not load jobs. Please try again later.')
    }
}

init()
