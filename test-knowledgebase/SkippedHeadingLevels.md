# Skipped Heading Levels

This page jumps from its title straight to `###`, so the main heading level is three rather than
two and the sections below are the ones a chunk is cut at.

### Deadline propagation

A client that passes its remaining budget downstream lets the callee give up before the caller
does, which keeps a slow dependency from consuming the whole request budget.

#### Budget arithmetic

Subtract the time already spent from the deadline before every outgoing call.

> **Chunk check**
>
> - Path — `docs/skipped-heading-levels/deadline-propagation.md`
> - Name — `Skipped Heading Levels: Deadline propagation`
> - Description — the paragraph above
> - Covers — the main heading level being the shallowest level that holds more than the page
>   title, even when the levels between them are missing, and `####` still counting as deeper

### Retry amplification

Retrying at every hop of a call chain multiplies the load on the deepest service, so a retry
belongs at one layer only.

> **Chunk check**
>
> - Path — `docs/skipped-heading-levels/retry-amplification.md`
> - Name — `Skipped Heading Levels: Retry amplification`
> - Description — the paragraph above
> - Covers — the second section at the skipped level, proving the level was picked and not guessed
