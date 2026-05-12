# Phase 5: Refractive Hover - Plan

## Objective
Elevate the card interaction to "God Tier" by adding a refractive light sweep (lens flare) that follows the cursor across the glass cards, and refining the 3D tilt for maximum tactile responsiveness.

## Proposed Changes

### `app/static/styles/main.css`
- Add a `.flare` element or use `::after` on `.messageCard` to create a radial gradient highlight.
- Add CSS variables `--flareX` and `--flareY` to control the highlight position.
- Refine `.messageCard:hover` and `.gallery-card:hover` transitions for smoother 3D depth.

### `app/static/scripts/card_interaction.js` (New)
- Create a script to handle the "flare" positioning and tilt refinement on the cards.
- Track mouse position relative to the card dimensions.

### `app/templates/main.html`
- Link the new `card_interaction.js`.

## Verification Plan

### Manual (UAT)
- [ ] Hover over any card.
- [ ] Verify that a "glint" of light follows the mouse within the card.
- [ ] Verify that the 3D tilt feels smooth and responsive.

## Tasks

<task id="1" wave="1">
<description>Implement refractive flare in CSS</description>
<read_first>
- c:/Users/LEELA/Downloads/Birthday-master/Birthday-master/app/static/styles/main.css
</read_first>
<action>
Add flare styles to `.messageCard`.
</action>
<acceptance_criteria>
- CSS contains `.messageCard::after` for the flare effect.
</acceptance_criteria>
</task>

<task id="2" wave="1">
<description>Create card interaction script</description>
<action>
Create `app/static/scripts/card_interaction.js`.
</action>
<acceptance_criteria>
- The script calculates relative mouse position and updates CSS variables.
</acceptance_criteria>
</task>

<task id="3" wave="1">
<description>Link script in main.html</description>
<action>
Add script tag to `main.html`.
</action>
<acceptance_criteria>
- `card_interaction.js` is linked.
</acceptance_criteria>
</task>
