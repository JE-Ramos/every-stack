# EveryStack Docs

This folder is an Obsidian-compatible knowledge base. Open it as a vault in Obsidian or browse as plain markdown.

## Structure

```
docs/
  adrs/            Architecture Decision Records — why we chose X over Y
  plans/           Technical plans and proposals before implementation
  rfcs/            Request for Comments — larger changes needing team input
  blog/            Shareable posts about what we built and why
  runbooks/        Operational procedures (deploy, rollback, incident response)
  meeting-notes/   Meeting summaries with action items
```

## Conventions

- **Filename**: `YYYY-MM-DD-slug.md` (e.g. `2026-03-21-switch-to-fastapi.md`)
- **Frontmatter**: Every file has YAML frontmatter for Obsidian metadata
- **Tags**: Use Obsidian tags (`#everystack`, `#frontend`, `#backend`, etc.)
- **Links**: Use `[[wikilinks]]` for Obsidian or `[text](relative-path.md)` for GitHub compatibility
