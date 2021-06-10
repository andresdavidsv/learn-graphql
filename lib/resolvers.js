'use strict';
const courses = [
  {
    _id: 'anyid',
    title: 'My Title',
    teacher: 'My teacher',
    description: 'A description',
    topic: 'A Topic',
  },
  {
    _id: 'anyid2',
    title: 'My Title2',
    teacher: 'My teacher',
    description: 'A description',
    topic: 'A Topic',
  },
  {
    _id: 'anyid3',
    title: 'My Title3',
    teacher: 'My teacher',
    description: 'A description',
    topic: 'A Topic',
  },
  {
    _id: 'anyid4',
    title: 'My Title4',
    teacher: 'My teacher',
    description: 'A description',
    topic: 'A Topic',
  },
  {
    _id: 'anyid5',
    title: 'My Title5',
    teacher: 'My teacher',
    description: 'A description',
    topic: 'A Topic',
  },
];
module.exports = {
  Query: {
    getCourses: () => {
      return courses;
    },
    getCourse: (root, args) => courses.find((course) => course._id === args.id),
  },
};
