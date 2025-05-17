export function formatTimeAgo(timeAgo: string) {
  if (!timeAgo || typeof timeAgo !== "string") return "Unknown";
  const match = timeAgo.match(/^(\d+)\s+(\w+)\s+ago$/);
  if (!match) return timeAgo;

  const value = parseInt(match[1], 10);
  const unit = match[2].toLowerCase();

  if (unit.startsWith("hour")) {
    if (value < 24) {
      return `${value} hour${value > 1 ? "s" : ""} ago`;
    }
    const days = Math.floor(value / 24);
    if (days < 7) {
      return `${days} day${days > 1 ? "s" : ""} ago`;
    }
    const weeks = Math.floor(days / 7);
    if (weeks < 4) {
      return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
    }
    const months = Math.floor(days / 30);
    return `${months} month${months > 1 ? "s" : ""} ago`;
  }
  if (unit.startsWith("minute")) {
    if (value < 60) {
      return `${value} min${value > 1 ? "s" : ""} ago`;
    }
    const hours = Math.floor(value / 60);
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  }
  if (unit.startsWith("second")) {
    return `${value} sec${value > 1 ? "s" : ""} ago`;
  }
  if (unit.startsWith("day")) {
    if (value < 7) {
      return `${value} day${value > 1 ? "s" : ""} ago`;
    }
    const weeks = Math.floor(value / 7);
    if (weeks < 4) {
      return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
    }
    const months = Math.floor(value / 30);
    return `${months} month${months > 1 ? "s" : ""} ago`;
  }
  if (unit.startsWith("week")) {
    if (value < 4) {
      return `${value} week${value > 1 ? "s" : ""} ago`;
    }
    const months = Math.floor(value / 4);
    return `${months} month${months > 1 ? "s" : ""} ago`;
  }
  if (unit.startsWith("month")) {
    return `${value} month${value > 1 ? "s" : ""} ago`;
  }
  return timeAgo;
}
