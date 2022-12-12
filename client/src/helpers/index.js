const sortMonths = (months) => {
  const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const sortedMonths = months.sort(function (a, b) {
    return MONTHS.indexOf(a) - MONTHS.indexOf(b)
  })

  return sortedMonths
}

export const checkLastElementIfNull = (array) => {
  /**
   * This prevents the ADD button from being used over and over without
   * filling up the form first.
   */
  const LAST_ELEMENT = array[array.length - 1]
  const valuesOfLastElement = Object.values(LAST_ELEMENT)
  const isNull = valuesOfLastElement.every((value) => value !== null)

  return isNull
}

export const getParenthesisValue = (string) => {
  const parsed = string.split('(')
  return {
    mainValue: parsed[0].trim(),
    specificValue: parsed[1].slice(0, -1), // remove closing ")"
  }
}

export const parenthesize = (string) => {
  return `(${string})`
}

export const stringifyArray = (array, othersSpecifyValue) => {
  let stringified = ''

  array.map((source, index) => {
    stringified = stringified.concat(source)

    if (source === 'Others') {
      stringified = stringified.concat(parenthesize(othersSpecifyValue))
    }

    if (index < array.length - 1) {
      stringified = stringified.concat(', ')
    }
  })

  return stringified
}

export const stringifyMonths = (months) => {
  let stringified = ''

  const sortedMonths = sortMonths(months)
  sortedMonths.map((month, index) => {
    stringified = stringified.concat(month)

    if (index < sortedMonths.length - 1) {
      stringified = stringified.concat(', ')
    }
  })

  return stringified
}

export const removeElementOfOthersArray = (array, index) => {
  array.splice(index, 1)
}

export const stringSplitToObject = (string, props) => {
  const semiColonParsed = string.split(';')

  let items = []
  semiColonParsed.map((obj) => {
    const commaParsed = obj.split(',')

    let item = {}
    for (let i = 0; i < commaParsed.length; i++) {
      item[props[i]] = commaParsed[i]
    }
    items.push(item)
  })

  return items
}
