'use strict'

const { ObjectId } = require('mongodb')
const connectDb = require('./db')

module.exports = {
  createCourse: async (root, { input }) => {
    const defaults = {
      teacher: '',
      topic: ''
    }

    const newCourse = Object.assign(defaults, input)
    let db
    let course

    try {
      db = await connectDb()
      course = await db.collection('courses').insertOne(newCourse)
      newCourse._id = course.insertedId
    } catch (error) {
      errorHandler(error)
    }

    return newCourse
  },
  editCourse: async (root, { _id, input }) => {

    let db
    let course

    try {
      db = await connectDb()
      await db.collection('courses').updateOne({_id:ObjectId(_id)}, {$set: input})
      course = await db.collection('courses').findOne({_id:ObjectId(_id)})
    } catch (error) {
      errorHandler(error)
    }

    return course
  },
  deleteCourse: async (root, { _id }) => {
    let db

    try {
      db = await connectDb()
      await db.collection('courses').deleteOne(
        { _id: ObjectID(_id) }
      )
    } catch (error) {
      errorHandler(error)
    }

    return true
  },

  // Student
  createStudent: async (root, { input }) => {

    let db
    let student

    try {
      db = await connectDb()
      student = await db.collection('students').insertOne(input)
      input._id = student.insertedId
    } catch (error) {
      errorHandler(error)
    }

    return input
  },
  editStudent: async (root, { _id, input }) => {

    let db
    let student

    try {
      db = await connectDb()
      await db.collection('students').updateOne({_id:ObjectId(_id)}, {$set: input})
      student = await db.collection('students').findOne({_id:ObjectId(_id)})
    } catch (error) {
      errorHandler(error)
    }

    return student
  },
  deleteStudent: async (root, {
    _id
  }) => {
    let db

    try {
      db = await connectDb()
      await db.collection('students').deleteOne({
        _id: ObjectID(_id)
      })
    } catch (error) {
      errorHandler(error)
    }

    return true
  },

  addPeople: async (root,{courseID, personID}) =>{
    let db
    let person
    let course

    try {
      db = await connectDb()
      course = await db.collection('courses').findOne({
        _id: ObjectId(courseID)
      })
      person = await db.collection('students').findOne({
        _id: ObjectId(personID)
      })

      if (!course || !person) throw new Error('La Persona o el Curso no existe')

      await db.collection('courses').updateOne(
        { _id: ObjectId(courseID) },
        { $addToSet: { people: ObjectId(personID) } }
      )
    } catch (error) {
      errorHandler(error)
    }

    return course
  }
}