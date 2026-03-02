# Deployment

This site deploys via **GitHub → Vercel**. Pushing to `main` auto-deploys.

## Rules
- **DO NOT** run `vercel deploy`, `firebase deploy`, or any manual deploy command.
- **DO NOT** change the git remote URL.
- Just `git commit` — a post-commit hook handles `git push` automatically, and Vercel deploys from the push.

## Workflow
1. Make your code changes
2. `git add` + `git commit`
3. Done. Push and deploy happen automatically.
