import _ from 'lodash'

const parseErrors = errors => {
  const result = {}
  _.forEach(errors, (val, key) => {
    result[key] = val.message
  })
  return result
}

export default parseErrors
