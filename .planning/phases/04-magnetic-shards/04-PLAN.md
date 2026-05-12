# Phase 4: Magnetic Shards - Plan

## Objective
Enhance the atmospheric background by making the floating shards interactive. They should subtly react to the cursor position, creating a "magnetic" or "gravitational" feel that brings the interface to life.

## Proposed Changes

### `app/templates/main.html`
- Add a script tag to include `magnetic_shards.js`.

### `app/static/scripts/magnetic_shards.js`
- Create a new script that:
    - Selects all `.shard` elements.
    - Tracks mouse movement.
    - Applies a `transform: translate(...)` offset to each shard based on its distance from the cursor.
    - Uses requestAnimationFrame for smooth 60fps performance.

## Verification Plan

### Manual (UAT)
- [ ] Open the main page.
- [ ] Move the cursor and verify that shards move slightly in response.
- [ ] Ensure the movement is subtle and doesn't distract from the card content.

## Tasks

<task id="1" wave="1">
<description>Implement magnetic shards script</description>
<action>
Create `app/static/scripts/magnetic_shards.js`.
</action>
<acceptance_criteria>
- The file exists and contains logic to move shards based on mouse position.
</acceptance_criteria>
</task>

<task id="2" wave="1">
<description>Link script in main.html</description>
<read_first>
- c:/Users/LEELA/Downloads/Birthday-master/Birthday-master/app/templates/main.html
</read_first>
<action>
Add `<script src="{{ url_for('static', filename='scripts/magnetic_shards.js') }}"></script>` to `main.html`.
</action>
<acceptance_criteria>
- The script is correctly linked in `main.html`.
</acceptance_criteria>
</task>
