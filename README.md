# Vue.js Counter with Dynamic Background

This simple Vue.js app demonstrates a counter that dynamically adjusts the background size of the `<main>` element based on the counter's value. The app includes buttons to increment the counter by clicking the main area and a reset button to set the counter back to 0.

## Features

- **Counter:** Clicking on the main section increases the counter.
- **Dynamic Background:** The background gradient of the `<main>` element changes based on the counter's value, from 0% to 100%.
- **Reset Button:** A button resets the counter to 0, resetting the background size as well.

## Vue.js Features Used

### 1. **Reactive Data**

The app uses Vue's `data()` function to define reactive properties like `count`. This reactive data changes when the user interacts with the app, and Vue automatically updates the DOM to reflect these changes.

### 2. **Computed Property**

The backgroundPercentage computed property calculates the percentage of the background that should be filled based on the current counter value. Vue automatically re-evaluates this value whenever count changes. This ensures that the background size reflects the current state of the counter accurately.

### 3. **Event Binding**

Vue's @click directive binds click events to DOM elements, triggering changes in the app's data. The main area increments the counter, while the reset button resets the counter to 0. This allows for interactive user engagement.

The background size changes smoothly due to a CSS transition. This ensures a smooth user experience when the background size changes as the counter increases or is reset. The transition provides visual feedback that enhances usability.

### 4. **Style Binding**

Vue allows binding dynamic styles using the :style directive. The background size is controlled by a CSS variable, which is dynamically set based on the computed backgroundPercentage. This provides a visual indication of the counter's value.