let now = new Date();
const dd = String(now.getDate()).padStart(2, '0');
const mm = String(now.getMonth() + 1).padStart(2, '0');
const yyyy = now.getFullYear();
now = `${yyyy}-${mm}-${dd}`;
export const today = now;

export function getVacationDays(dateFrom, dateTo) {
  const days = Math.ceil(
    (new Date(dateTo) - new Date(dateFrom)) / (1000 * 3600 * 24),
  );
  let vacationDays = ' ';
  if (days > 0) {
    vacationDays = days + 1;
  } else if (dateFrom === dateTo) {
    vacationDays = 1;
  } else if (days < 1) {
    vacationDays = false;
  }
  return vacationDays;
}
