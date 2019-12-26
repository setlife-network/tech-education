//const apiModules = require('./api/modules')
const crudRefactored = require('../modules/crudRefactorClean')

const {

    fetchCoursesById,
    fetchCourses,
    createCourse,
    updateCourses,
    fetchCoursesByLanguage,
    deleteCourses,

    fetchTopicsById,
    fetchTopics,
    fetchTopicsByCourse,
    createTopics,
    deleteTopics,
    fetchTopicsByLanguage,

    fetchUsers,
    createUsers,
    deleteUsers,
   /* updateUsers,
     */

    fetchFeedback,
    createFeedback,
    deleteFeedback
} = crudRefactored

//console.log(crudRefactored)

deleteFeedback({ feedbackId: 1})