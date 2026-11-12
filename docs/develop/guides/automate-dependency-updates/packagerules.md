## PackageRules

We have divided our custom `packageRules` into four.

First, all the patches on strato dependencies will be grouped together and have a higher priority.

```json title="renovate.json"
{
  "groupName": "Strato - Patches",
  "description": "Update Strato patches with priority, without migrations",
  "enabled": true,
  "matchPackageNames": ["@dynatrace/strato-**"],
  "matchUpdateTypes": ["patch"],
  "prPriority": 1
}
```

- Second, all minor and major versions of Strato dependencies are grouped together, updated once a week, and have the proper migrations applied automatically, if available.

```json title="renovate.json"
{
  "groupName": "Strato",
  "description": "Weekly Strato update with migrations",
  "matchPackageNames": ["@dynatrace/strato-**"],
  "matchUpdateTypes": ["major", "minor"],
  "postUpgradeTasks": {
    "commands": [
      "npm ci --ignore-scripts",
      "npx dt-app migration execute --package \"{{{depName}}}\" --from \"{{{currentVersion}}}\" --to \"{{{newVersion}}}\"",
      "npx eslint . --fix"
    ],
    "executionMode": "update"
  },
  "schedule": ["on monday"]
}
```

- Third, all major and minor versions of `dt-app` are updated and migrated automatically.

```json title="renovate.json"
{
  "matchPackageNames": ["dt-app"],
  "description": "dt-app updates with migrations",
  "matchUpdateTypes": ["major", "minor"],
  "postUpgradeTasks": {
    "commands": [
      "npm ci --ignore-scripts",
      "npx dt-app migration execute --package \"{{{depName}}}\" --from \"{{{currentVersion}}}\" --to \"{{{newVersion}}}\"",
      "npx eslint . --fix"
    ],
    "executionMode": "update"
  }
}
```

- Finally, the rest of Dynatrace libraries and SDKs are updated independently regardless of the update type, to have smaller PRs which are less likely to have a failed build. Additionally, you can ignore an update by declining the PR, since it won't be triggered again, which isn't the case for groups.

```json title="renovate.json"
{
  "description": "All Dynatrace packages have increased update frequency",
  "matchPackageNames": ["@dynatrace/**", "@dynatrace-sdk/**"],
  "minimumReleaseAge": "0 days",
  "internalChecksFilter": "strict"
}
```
