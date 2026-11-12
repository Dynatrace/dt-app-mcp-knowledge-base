## Complete configuration example

```json title="renovate.json"
{
  "$schema": "https://docs.renovatebot.com/renovate-schema.json",
  "extends": ["config:best-practices", "config:js-app"],
  "timezone": "Europe/Vienna",
  "npmrcMerge": true,
  "enabledManagers": ["npm"],
  "baseBranches": ["main"],
  "packageRules": [
    {
      "description": "All Dynatrace packages have increased update frequency",
      "matchPackageNames": ["@dynatrace/**", "@dynatrace-sdk/**"],
      "minimumReleaseAge": "0 days",
      "internalChecksFilter": "strict"
    },
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
    },
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
    },
    {
      "groupName": "Strato - Patches",
      "description": "Update Strato patches with priority, without migrations",
      "enabled": true,
      "matchPackageNames": ["@dynatrace/strato-**"],
      "matchUpdateTypes": ["patch"],
      "prPriority": 1
    }
  ]
}
```

For more information, refer to the official [Noise Reduction](https://docs.renovatebot.com/noise-reduction/) guide on how to get a smooth Renovate bot experience, and to [Dependency pinning](https://docs.renovatebot.com/dependency-pinning/#pinning-dependencies-and-lock-files) for more stable updates.
