'use strict'
const fs = require('fs')
const path = require('path')
const os = require('os')
const rimraf = require('rimraf')
let exercise = require('workshopper-exercise/basic')
const wrappedexec = require('workshopper-wrappedexec')
const boganipsum = require('boganipsum')

const testFile = path.join(os.tmpdir(), '_learnyounode_' + process.pid + '.txt')

// wrap up the child process in a phantom wrapper that can
// mess with the global environment and inspect execution
exercise = wrappedexec(exercise)

// a module we want run just prior to the submission in the
// child process
exercise.wrapModule(require.resolve('./wrap'))

// set up the data file to be passed to the submission
exercise.addSetup(function (mode, callback) {
  // mode == 'run' || 'verify'

  const lines = Math.ceil(Math.random() * 50)
  const txt = boganipsum({ paragraphs: lines })

  // supply the file as an arg to the 'execute' processor for both
  // solution and submission spawn()
  // using unshift here because wrappedexec needs to use additional
  // args to do its magic
  this.submissionArgs.unshift(testFile)
  this.solutionArgs.unshift(testFile)

  // file with random text
  fs.writeFile(testFile, txt, 'utf8', callback)
})

// add a processor only for 'verify' calls
exercise.addVerifyProcessor(function (callback) {
  let usedSync = false
  let usedAsync = false

  Object.keys(exercise.wrapData.fsCalls || {}).forEach(function (m) {
    if (/Sync$/.test(m)) {
      usedSync = true
      this.emit('pass', this.__('pass.sync', { method: 'fs.' + m + '()' }))
    } else {
      usedAsync = true
      this.emit('fail', this.__('fail.async', { method: 'fs.' + m + '()' }))
    }
  }.bind(this))

  callback(null, !usedAsync && usedSync)
})

// cleanup for both run and verify
exercise.addCleanup(function (mode, passed, callback) {
  // mode == 'run' || 'verify'

  rimraf(testFile, callback)
})

module.exports = exercise
