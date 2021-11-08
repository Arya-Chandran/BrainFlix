
export function computeTimestamp(timestamp) {
    return new Date(timestamp)
    .toLocaleString()
    .split(",")[0]
  }