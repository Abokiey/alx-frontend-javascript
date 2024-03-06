export default function guardrail(mathFunction) {
  const queue = [];

  try {
    const resolved = mathFunction();
    queue.push(resolved);
  } catch (err) {
    queue.push(err.toString());
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
