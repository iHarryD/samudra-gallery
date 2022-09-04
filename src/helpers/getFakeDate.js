export function getFakeDate(today = false) {
  if (today) {
    return new Date().toDateString();
  } else {
    return new Date(
      new Date() - 1000 * 60 * 60 * (24 * Math.floor(Math.random() * 6 + 1))
    ).toDateString();
  }
}
