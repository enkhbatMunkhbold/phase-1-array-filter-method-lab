const findMatching = (drivers, str) => drivers.filter(driver => driver.toLowerCase() === str.toLowerCase())
const fuzzyMatch = (drivers, str) => drivers.filter(driver => driver.slice(0, str.length) === str)
const matchName = (drivers, str) => drivers.filter(driver => driver.name === str)
