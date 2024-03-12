export const weakMap = new WeakMap();

export const queryAPI = (endpoint) => {
  const count = weakMap.get(endpoint) || 0;
  weakMap.set(endpoint, count + 1);

  if (count >= 4) throw console.error('Endpoint load is high');
  return count + 1;
};
