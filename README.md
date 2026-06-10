# 🚀 GitHub Repository Finder

A modern, responsive, and interactive web application that helps users discover random GitHub repositories based on a selected programming language.

The application uses the GitHub Repository Search API to fetch repository data and display useful information such as repository name, description, stars, forks, and open issues. Users can refresh the results to discover new repositories within the same programming language.

---

## 📸 Preview

Discover open-source projects instantly by selecting a programming language and generating random repositories from GitHub.

---

## ✨ Features

### Repository Discovery

- Select a programming language from a dropdown menu
- Fetch random repositories using the GitHub Search API
- Generate a new random repository with a single click
- Explore repositories from popular programming languages

### Repository Information

Each repository card displays:

- Repository Name
- Repository Description
- Star Count ⭐
- Fork Count 🍴
- Open Issues Count 🐞
- Direct Link to GitHub Repository

### User Experience

- Responsive design for all devices
- Modern glassmorphism user interface
- Loading state while fetching data
- Error state handling
- Empty state handling
- Refresh button after successful search
- Smooth and intuitive interactions

---

## 🛠️ Technologies Used

### Frontend

- HTML5
- CSS3
- JavaScript (ES6+)

### APIs

- GitHub Repository Search API

### Concepts Practiced

- API Integration
- Asynchronous JavaScript
- Fetch API
- DOM Manipulation
- Event Handling
- State Management
- Responsive Web Design
- Error Handling

---

## 📂 Project Structure

```text
github-repository-finder/
│
├── index.html
│
├── css/
│   └── style.css
│
├── js/
│   └── app.js
│
└── assets/
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/github-repository-finder.git
```

### 2. Navigate to the Project

```bash
cd github-repository-finder
```

### 3. Run the Project

Open the project using one of the following methods:

#### Option 1: Live Server (Recommended)

- Install the Live Server extension in VS Code
- Open the project folder
- Right-click `index.html`
- Select **Open with Live Server**

#### Option 2: Open Directly

Simply open:

```text
index.html
```

in your web browser.

---

## 🔗 GitHub API Endpoint

This project uses the GitHub Search Repositories endpoint:

```http
GET https://api.github.com/search/repositories
```

Example request:

```http
https://api.github.com/search/repositories?q=language:JavaScript&sort=stars&order=desc&per_page=100
```

---

## 📋 How It Works

1. Select a programming language from the dropdown menu.
2. Click **Find Repository**.
3. The application sends a request to the GitHub Search API.
4. A random repository is selected from the returned results.
5. Repository details are displayed on the screen.
6. Click **Refresh** to discover another repository in the same language.

---

## 📱 Responsive Design

The application is fully optimized for:

- Mobile Phones
- Tablets
- Laptops
- Desktop Screens

---

## ⚠️ Error Handling

The application gracefully handles:

- Invalid API responses
- Network failures
- Empty search results
- GitHub API rate limits
- Unexpected server errors

---

## 🎯 Learning Objectives

This project was created to practice:

- Working with external APIs
- Handling asynchronous requests
- Managing application states
- Dynamic DOM updates
- Building responsive user interfaces
- Improving user experience through loading and error states

---

## 🔮 Future Improvements

Potential enhancements include:

- Repository Owner Avatar
- Language Badges
- Repository Topics/Tags
- Search History
- Favorite Repositories
- Local Storage Support
- Dark/Light Theme Toggle
- Skeleton Loading Screens
- Infinite Repository Discovery
- GitHub Authentication
- Repository Filtering by Stars
- Advanced Search Options

---

## 🤝 Contributing

Contributions, suggestions, and improvements are welcome.

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature/new-feature
```

3. Commit your changes

```bash
git commit -m "Add new feature"
```

4. Push your branch

```bash
git push origin feature/new-feature
```

5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

Developed as a frontend project to practice API integration, asynchronous JavaScript, DOM manipulation, and responsive web design while exploring the GitHub ecosystem.
