# Changesets

This directory contains "changesets" which help us manage package versions and changelogs.

## What is a changeset?

A changeset is a file that represents a change to the codebase that requires a version bump and changelog entry.

## How to create a changeset

When you make changes to a package or app that should result in a version bump, you need to create a changeset:

```bash
pnpm changeset
```

This will:

1. Prompt you to select which packages you've changed
2. Ask what kind of version bump you want to make (patch, minor, major)
3. Ask for a summary of your changes (which becomes the changelog entry)

This creates files in the `.changeset` directory which will be used when we release new versions.

## When should I create a changeset?

Create a changeset when you've made changes that should be reflected in the package version and changelog. This includes:

- New features (minor bump)
- Bug fixes (patch bump)
- Breaking changes (major bump)
- Documentation changes that affect the API (varies)

The PR CI workflow will automatically check for changesets when code changes are detected.

## How versions are updated

When changes are merged to main:

1. The GitHub Actions workflow automatically creates a "Version Packages" PR
2. This PR updates versions and changelogs based on the changesets
3. When this PR is merged, packages are automatically published

## More information

For more details, see the [changesets documentation](https://github.com/changesets/changesets/blob/main/docs/intro-to-using-changesets.md).
