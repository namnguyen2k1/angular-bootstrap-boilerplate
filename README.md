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

## 📁 Project Structure Overview

This Angular project is structured using feature-based architecture and fully adopts the standalone component API, promoting modularity, reusability, and scalability.

#### Key Highlights

`Standalone Components`: All components and routes are declared with standalone: true, eliminating the need for NgModules.

`Feature-Based Organization`: Each domain (e.g., auth, post, user) is self-contained, including APIs, models, pages, services, and routing.

`Separation of Concerns`: Shared utilities, guards, interceptors, and services are centralized in core/ and shared/.

`Layout-Driven Routing`: Layouts (e.g., auth-layout, home-layout) structure route groups with their own UI shells.

#### Folder Overview

`app/`: Root configuration and bootstrap files.

`core/`: Application-wide logic – guards, interceptors, constants, services, and utilities.

`features/`: Modular, domain-specific features with full encapsulation of UI, logic, and routing.

`layouts/`: Defines structural layouts with associated routes.

`shared/`: Reusable UI components, directives, pipes, and design utilities.

`styles/`: Global styles and SCSS utilities.

`environments/`: Standard Angular environment configuration.

```bash
src
├── app
│   ├── app.component.ts
│   ├── app.config.ts
│   ├── app.routes.ts
│   ├── core
│   │   ├── constants
│   │   │   ├── api-service.constant.ts
│   │   │   └── index.ts
│   │   ├── guards
│   │   │   ├── auth.guard.ts
│   │   │   ├── index.ts
│   │   │   ├── integer-param.guard.ts
│   │   │   ├── no-auth.guard.ts
│   │   │   └── role.guard.ts
│   │   ├── interceptors
│   │   │   ├── error.interceptor.ts
│   │   │   ├── index.ts
│   │   │   ├── logger.interceptor.ts
│   │   │   └── switch-service.interceptor.ts
│   │   ├── models
│   │   │   ├── index.ts
│   │   │   └── session.model.ts
│   │   ├── services
│   │   │   ├── index.ts
│   │   │   └── session.service.ts
│   │   └── utils
│   │       ├── fetch-state
│   │       │   ├── fetch-state.type.ts
│   │       │   └── to-fetch-state.operator.ts
│   │       └── index.ts
│   ├── features
│   │   ├── auth
│   │   │   ├── apis
│   │   │   │   └── index.ts
│   │   │   ├── auth.routes.ts
│   │   │   ├── components
│   │   │   │   └── index.ts
│   │   │   ├── models
│   │   │   │   └── index.ts
│   │   │   ├── pages
│   │   │   │   ├── login.component.ts
│   │   │   │   └── register.component.ts
│   │   │   └── services
│   │   │       └── index.ts
│   │   ├── post
│   │   │   ├── apis
│   │   │   │   ├── index.ts
│   │   │   │   └── post.api.ts
│   │   │   ├── components
│   │   │   │   ├── index.ts
│   │   │   │   └── post.component.ts
│   │   │   ├── models
│   │   │   │   ├── index.ts
│   │   │   │   └── post.model.ts
│   │   │   ├── pages
│   │   │   │   ├── post-detail.component.ts
│   │   │   │   └── post-listing.component.ts
│   │   │   ├── post.routes.ts
│   │   │   └── services
│   │   │       ├── index.ts
│   │   │       └── post.service.ts
│   │   └── user
│   │       ├── apis
│   │       │   ├── index.ts
│   │       │   └── user.api.ts
│   │       ├── components
│   │       │   ├── index.ts
│   │       │   └── user.component.ts
│   │       ├── models
│   │       │   ├── index.ts
│   │       │   └── user.model.ts
│   │       ├── pages
│   │       │   ├── user-detail.component.ts
│   │       │   └── user-listing.component.ts
│   │       ├── services
│   │       │   ├── index.ts
│   │       │   └── user.service.ts
│   │       └── user.routes.ts
│   ├── layouts
│   │   ├── auth-layout
│   │   │   ├── auth-layout.component.ts
│   │   │   └── auth-layout.routes.ts
│   │   ├── forbidden-page.component.ts
│   │   ├── home-layout
│   │   │   ├── home-layout.component.ts
│   │   │   └── home-layout.routes.ts
│   │   ├── maintenance-page.component.ts
│   │   └── not-found-page.component.ts
│   └── shared
│       ├── components
│       │   └── index.ts
│       ├── directives
│       │   └── index.ts
│       ├── icons
│       │   └── icon.module.ts
│       ├── pipes
│       │   └── index.ts
│       └── ui
│           └── index.ts
├── environments
│   ├── environment.prod.ts
│   └── environment.ts
├── index.html
├── main.ts
├── styles
│   ├── _font.scss
│   └── _utils.scss
└── styles.scss
```

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
