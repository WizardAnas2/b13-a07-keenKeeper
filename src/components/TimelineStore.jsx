export const logInteraction = (friendName, type) => {
  if (typeof window !== "undefined") {
    const newEntry = {
      id: Date.now(),
      friendName,
      type,
      date: new Date().toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric', 
        year: 'numeric' 
      }),
    };
    const existing = JSON.parse(localStorage.getItem("timeline") || "[]");
    localStorage.setItem("timeline", JSON.stringify([newEntry, ...existing]));
    return true;
  }
  return false;
};
export const getTimeline = () => {
  if (typeof window !== "undefined") {
    return JSON.parse(localStorage.getItem("timeline") || "[]");
  }
  return [];
};