# Agent guidelines

## Pull requests and branches

Jira ticket numbers (e.g. `APPDEV-12345`) must not appear anywhere in:

- PR branch names
- PR titles
- PR descriptions (body, bullet points, closing keywords, etc.)

Every PR must contain exactly one commit. Before pushing a finalised branch, squash all commits down to one:

```sh
git reset --soft HEAD~$(($(git rev-list --count main..HEAD) - 1))
git commit --amend -m "<conventional commit message>"
git push --force-with-lease
```

## Agent guidance

- **Trust these instructions.** Only perform additional search or exploration if information is missing or found to be incorrect.
- **Do not run commands not listed here unless required for a new, explicitly documented workflow.**

## Coding style

- Comments must not begin with a lowercase character.
- Keep comments short (two lines max). Only comment the non-obvious WHY — never the WHAT.
- Never write multi-line comment blocks or docstrings spanning more than two lines.
