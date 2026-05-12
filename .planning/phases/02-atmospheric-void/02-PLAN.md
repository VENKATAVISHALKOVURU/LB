# Phase 2: Atmospheric Void - Plan

## Objective
Enhance the background atmosphere with multiple floating shards and refined floor glows to anchor the majestic cards.

## Proposed Changes

### `app/templates/main.html`
- Add multiple shard elements within `.atmospheric-void` for sections 2 and 3.

### `app/static/styles/main.css`
- Define different sizes and speeds for shards.
- Refine the floor glow gradient for better depth.

## Verification Plan

### Automated
- [ ] Grep `main.html` for shard elements.
- [ ] Grep `main.css` for `.shard` animations.

### Manual (UAT)
- [ ] Verify that the background feels alive with multiple floating elements.
- [ ] Verify that the floor glow doesn't interfere with card readability.

## Tasks

<task id="1" wave="1">
<description>Implement multiple floating shards in HTML</description>
<read_first>
- c:/Users/LEELA/Downloads/Birthday-master/Birthday-master/app/templates/main.html
</read_first>
<action>
Add `<div class="shard s1"></div>`, `<div class="shard s2"></div>`, etc. inside each `.atmospheric-void`.
</action>
<acceptance_criteria>
- `main.html` contains multiple shard divs in sections 2 and 3.
</acceptance_criteria>
</task>

<task id="2" wave="1">
<description>Refine shard styles and animations in CSS</description>
<read_first>
- c:/Users/LEELA/Downloads/Birthday-master/Birthday-master/app/static/styles/main.css
</read_first>
<action>
Define `.shard` styling and specific animations for different shards (different delays/speeds).
Refine `.section::after` glow.
</action>
<acceptance_criteria>
- `main.css` contains `.shard` class and animations.
</acceptance_criteria>
</task>
