export function formatDate(date: string) {
  return new Date(date).toLocaleDateString('NL', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}
