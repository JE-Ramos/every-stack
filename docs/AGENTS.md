# docs/

Obsidian-compatible knowledge base. All files are plain markdown with YAML frontmatter.

## Rules

- Filename convention: `YYYY-MM-DD-slug.md` (e.g. `2026-03-21-switch-to-fastapi.md`)
- Every file MUST have YAML frontmatter with at least: `title`, `date`, `tags`
- Use `000-template.md` in each folder as the starting point for new docs
- Tags use Obsidian format: `[everystack, frontend, backend]` in frontmatter
- Cross-references use `[[wikilinks]]` for Obsidian or `[text](relative-path.md)` for GitHub
- Do NOT use `.mdx` — plain `.md` only for maximum Obsidian compatibility

## Structure

| Folder           | Purpose                                                  | Status field values                                |
| ---------------- | -------------------------------------------------------- | -------------------------------------------------- |
| `adrs/`          | Architecture Decision Records — why we chose X over Y    | `accepted`, `proposed`, `deprecated`, `superseded` |
| `plans/`         | Technical proposals before implementation                | `draft`, `approved`, `in-progress`, `completed`    |
| `rfcs/`          | Request for Comments — larger changes needing team input | `draft`, `open`, `accepted`, `rejected`            |
| `blog/`          | Shareable posts about what we built and why              | (none)                                             |
| `runbooks/`      | Operational procedures (deploy, rollback, incidents)     | (none)                                             |
| `meeting-notes/` | Meeting summaries with action items                      | (none)                                             |

## When to create what

- **Choosing between options** (e.g. FastAPI vs Express) → `adrs/`
- **Planning a feature before coding** → `plans/`
- **Proposing a cross-team change** → `rfcs/`
- **Sharing what you learned or built** → `blog/`
- **Documenting how to operate something** → `runbooks/`
- **Recording a meeting** → `meeting-notes/`

## Numbering

- ADRs and RFCs use sequential numbering: `001-slug.md`, `002-slug.md`
- Plans, blog, runbooks, meeting notes use date prefix: `2026-03-21-slug.md`
- `000-template.md` is reserved as the copy-from template in each folder
