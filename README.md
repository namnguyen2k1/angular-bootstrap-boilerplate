# Angular Bootstrap Boilerplate

> A ready-to-use Angular project boilerplate with essential tools preconfigured for productivity, code quality, and modern UI development.

---

## 🚀 Features Included

- This boilerplate is preconfigured with the following libraries and tools:

### ✅ Styling & UI

- **[Tailwind CSS](https://tailwindcss.com/):** Utility-first CSS framework for rapid UI development.
- **[Font Awesome](https://fontawesome.com/):** Icon library with Angular integration.

### ✅ Code Quality & Standards

- **[ESLint](https://eslint.org/):** Linting for TypeScript and Angular templates.
- **[Prettier](https://prettier.io/):** Code formatter for consistent style.
- **[Husky](https://typicode.github.io/husky):** Git hooks for automating checks.
- **[Lint-Staged](https://www.npmjs.com/package/lint-staged):** Run linter/formatter only on staged files.
- **[Commitlint](https://commitlint.js.org/):** Enforces conventional commit messages.

### ✅ Optimization & Maintenance

- **[Knip](https://knip.dev/):** Detects unused files, exports, and dependencies.
- **[source-map-explorer](https://www.npmjs.com/package/source-map-explorer):** Analyzes production bundle size.

---

## 🛠️ Setup Instructions

1. Clone the repository:

```bash
git clone https://github.com/your-name/angular-bootstrap-boilerplate.git
cd angular-bootstrap-boilerplate
```

2. Install dependencies:

```bash
npm install
```

3. Start the server:

```bash
npm start # development
npm start:prod # production

npm build # production
npm build:dev # development
```

---

## 🔧 Git Hooks Setup (Husky, Lint-Staged, Commitlint)

After cloning the project and installing dependencies, follow these steps to ensure Git hooks are set up correctly:

### 1. Install dependencies

```bash
npm install
```

### 2. Check if `.husky` directory exists

If `.husky` is not present (e.g., after a fresh clone), run:

```bash
npm run prepare
```

This will initialize the `.husky` directory.

### 3. Create hook files manually (if needed)

Inside the `.husky` folder, create two files:

#### `.husky/pre-commit`

```bash
npx lint-staged
```

#### `.husky/commit-msg`

```bash
npx commitlint --edit
```

### 4. Verify file permissions

Git hooks require executable permissions. Check permissions using:

```bash
ls -la .husky
```

If the files look like this:

```
-rw-rw-r-- ... pre-commit     # not executable
-rw-rw-r-- ... commit-msg     # not executable
```

You need to update the permissions.

### 5. Make the files executable

```bash
chmod +x .husky/pre-commit
chmod +x .husky/commit-msg
```

Now, when you make a commit, Husky will automatically:

- Run ESLint and Prettier on staged files (`lint-staged`)
- Validate commit message format (`commitlint`)
