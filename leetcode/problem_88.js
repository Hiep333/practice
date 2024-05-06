/**
 * @return {Function}
 */

var createHelloWorld =  () => {
  return function (...args) {
    return 'Hello World'
  }
}

createHelloWorld('hihi')
