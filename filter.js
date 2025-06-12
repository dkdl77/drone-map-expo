export function filterDetectedObjects(objects, condition) {
  return objects.filter(obj =>
    obj.type === condition.type && obj.confidence >= condition.confidence
  );
}
