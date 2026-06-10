const languageSelect = document.getElementById("languageSelect");

const searchBtn = document.getElementById("searchBtn");

const refreshBtn = document.getElementById("refreshBtn");

const loading = document.getElementById("loading");

const message = document.getElementById("message");

const repoCard = document.getElementById("repositoryCard");

let currentLanguage = "";

async function fetchRepository(language) {
    showLoading();

    try {
        const response = await fetch(
            `https://api.github.com/search/repositories?q=language:${language}&sort=stars&order=desc&per_page=100`,
        );

        if (!response.ok) {
            throw new Error("GitHub API request failed");
        }

        const data = await response.json();

        if (!data.items.length) {
            showMessage("No repositories found.");

            return;
        }

        const randomRepo =
            data.items[Math.floor(Math.random() * data.items.length)];

        displayRepository(randomRepo);
    } catch (error) {
        showMessage("Something went wrong. Please try again.");

        console.error(error);
    } finally {
        hideLoading();
    }
}

function displayRepository(repo) {
    repoCard.classList.remove("hidden");

    document.getElementById("repoName").textContent = repo.full_name;

    document.getElementById("repoDescription").textContent =
        repo.description || "No description available";

    document.getElementById("repoStars").textContent = repo.stargazers_count;

    document.getElementById("repoForks").textContent = repo.forks_count;

    document.getElementById("repoIssues").textContent = repo.open_issues_count;

    document.getElementById("repoLink").href = repo.html_url;

    refreshBtn.classList.remove("hidden");

    message.innerHTML = "";
}

function showLoading() {
    loading.classList.remove("hidden");

    repoCard.classList.add("hidden");

    message.innerHTML = "";
}

function hideLoading() {
    loading.classList.add("hidden");
}

function showMessage(text) {
    repoCard.classList.add("hidden");

    message.innerHTML = `<p>${text}</p>`;
}

searchBtn.addEventListener("click", () => {
    const language = languageSelect.value;

    if (!language) {
        showMessage("Please select a language.");

        return;
    }

    currentLanguage = language;

    fetchRepository(language);
});

refreshBtn.addEventListener("click", () => {
    if (currentLanguage) {
        fetchRepository(currentLanguage);
    }
});
