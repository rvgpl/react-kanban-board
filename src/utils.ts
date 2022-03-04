export const formatDate = (dateString: string | number) => {
  const d = new Date(dateString);
  return `${d.getDate()}-${
    d.getMonth() + 1
  }-${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`;
};
