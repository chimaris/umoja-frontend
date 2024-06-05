// utils/eventBus.js
import { ref } from 'vue';

const eventBus = ref({});

export function emitEvent(event, payload) {
  if (!eventBus.value[event]) return;
  eventBus.value[event].forEach(callback => callback(payload));
}

export function onEvent(event, callback) {
  if (!eventBus.value[event]) {
    eventBus.value[event] = [];
  }
  eventBus.value[event].push(callback);
}

export function offEvent(event, callback) {
  if (!eventBus.value[event]) return;
  eventBus.value[event] = eventBus.value[event].filter(cb => cb !== callback);
}
