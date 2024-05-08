# Rahul Dotel implementation (D&D 5th Edition API)

### packages used

- React 18+
- typescript
- react-query
- react-router-dom
- zustand (state management)
- tailwind css
- vite-tsconfig-paths

### Steps to setup locally

1. Install pnpm (package manager)

```
npm install -g pnpm
```

2. Install all the dependencies

```
pnpm install
```

3. start project in dev mode

```
pnpm dev
```

# some UX things implemented

- since we are displaying over 300+ spells. so user must be able to search spells through search input.
- also there is levels for each spells up 9 so DropDown button is provided for easier search
- spells can be added to favourites list and stored in a local storage for later retrieval
