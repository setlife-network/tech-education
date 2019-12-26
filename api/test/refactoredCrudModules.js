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
/*     createUsers,
    updateUsers,
    deleteUsers, */
} = crudRefactored

//console.log(crudRefactored)

fetchUsers()