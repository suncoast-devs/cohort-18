// This function returns today's date in the format
//
//      YYYY-MM-DD
//

export function today() {
  const isoDate = new Date().toISOString()

  return isoDate.slice(0, 10)
}
