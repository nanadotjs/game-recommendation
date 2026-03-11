export default function formatMemory(memoryString: string | undefined) {
    if (!memoryString || memoryString.trim() === "") return null;
  
    const trimmed = memoryString.trim();
    const match = trimmed.match(/(\d+)\s*(GB|MB)/i);
    if (!match) return null;
  
    const value = parseInt(match[1], 10);
    const unit = match[2].toUpperCase();
  
    if (unit === "GB") return value;
    if (unit === "MB") return value / 1024;
  
    return null;
  }