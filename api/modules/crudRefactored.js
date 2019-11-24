const sequelize = require('../models');

const { models } = sequelize;
const { User } = models;
const { Course } = models;
const { Topic } = models;
const { Language } = models;
const { Feedback } = models;


User.findAll().then(users => {
    console.log('All users:', JSON.stringify(users, null, 4));
});

Course.findAll().then(courses => {
    console.log('All Courses:', JSON.stringify(courses, null, 4));
});
//Fetch by ID
Course.findAll({ where: { id: [1, 2, 3] } }).then(courses => {
    console.log('All Courses by id:', JSON.stringify(courses, null, 4));
});

Topic.findAll().then(topics => {
    console.log('All Topics:', JSON.stringify(topics, null, 4));
});

Feedback.findAll().then(feedbacks => {
    console.log('All Feedback:', JSON.stringify(feedbacks, null, 4));
}); 

Language.findAll().then(languages => {
    console.log('All Feedback:', JSON.stringify(languages, null, 4));
}); 

/* module.exports = (function () {

    //explore await comand and sync() functions
    const fetchCoursesById = ({ courseId }) => {
        Course.findByPk(courseId)
        .then(course => {

        })
    }
    //const fetchCourses = () => {
        Course.findAll().then(courses => {
            console.log('All Courses:', JSON.stringify(courses, null, 4));
        });
   // } */


  /* return {
    fetchCourses,
    fetchCoursesById,
       fetchCoursesByLanguage,
      createCourses,
      updateCourses,
      deleteCourses,
      fetchTopics,
      fetchTopicsByTopicId,
      fetchTopicsByCourseId,
      fetchTopicsByLanguage,
      createTopics,
      updateTopics,
      deleteTopics,
      fetchUsers,
      createUsers,
      updateUsers,
      deleteUsers,
      fetchFeedback,
      createFeedback,
      updateFeedback,
      deleteFeedback, */
  //  };

//})();