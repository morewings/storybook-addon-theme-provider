/**
 * to load the built addon in this test Storybook
 */
export function previewAnnotations(entry = []) {
  return [...entry, require.resolve("../dist/preview.js")];
}

export function managerEntries(entry = []) {
  return [...entry, require.resolve("../dist/manager.js")];
}
