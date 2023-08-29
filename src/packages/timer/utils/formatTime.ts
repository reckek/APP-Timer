export const formatTime = (time?: number) =>
  time ? String(time).padStart(2, '0') : '00'
