# Phase 1: Vertical Expansion - Plan

## Objective
Scale the gallery cards to majestic proportions (`80vh` for content, `90vh` for containers) and ensure perfect vertical centering within the sections.

## Proposed Changes

### `app/static/styles/main.css`
- Ensure `.gallery-card` has `height: 90vh`.
- Ensure `.messageCard` has `height: 80vh`.
- Verify `.heroImages` scaling and positioning.
- Adjust `.photo-wrap` or other elements in the first section if needed for consistency.

## Verification Plan

### Automated
- [ ] Grep `main.css` for `height: 90vh` in `.gallery-card`.
- [ ] Grep `main.css` for `height: 80vh` in `.messageCard`.

### Manual (UAT)
- [ ] Open the application in the browser.
- [ ] Navigate to the gallery sections (MEMORIES // 01 and COLLECTIONS // 02).
- [ ] Verify that cards occupy the majority of the vertical space.
- [ ] Verify that floating orbs (hero images) are properly positioned relative to the tall cards.

## Tasks

<task id="1" wave="1">
<description>Audit and refine majestic scale in main.css</description>
<read_first>
- c:/Users/LEELA/Downloads/Birthday-master/Birthday-master/app/static/styles/main.css
</read_first>
<action>
Update `.gallery-card` to `height: 90vh` and `.messageCard` to `height: 80vh`. 
Adjust `padding-top` in `#messageContent` to ensure text clears the floating orb.
</action>
<acceptance_criteria>
- `main.css` contains `.gallery-card { height: 90vh; }`
- `main.css` contains `.messageCard { height: 80vh; }`
- `main.css` contains `padding-top: 28vh;` (or similar value that works with the new height)
</acceptance_criteria>
</task>

<task id="2" wave="2">
<description>Verify visual alignment</description>
<read_first>
- c:/Users/LEELA/Downloads/Birthday-master/Birthday-master/app/templates/main.html
</read_first>
<action>
Use the browser to verify the layout.
</action>
<acceptance_criteria>
- The user can see majestic cards in the gallery sections.
</acceptance_criteria>
</task>
