export function nestedGet(obj, path) {
  if (obj == null || path == null || path === "") return undefined;
  const parts = String(path).split(".");
  let cur = obj;
  for (const p of parts) {
    if (cur == null) return undefined;
    const n = Number(p);
    if (Array.isArray(cur) && !Number.isNaN(n) && String(n) === p) {
      cur = cur[n];
    } else {
      cur = cur[p];
    }
  }
  return cur;
}
