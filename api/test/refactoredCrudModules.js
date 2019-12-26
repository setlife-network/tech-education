//const apiModules = require('./api/modules')
const crudRefactored = require('../modules/crudRefactorClean')

const {

    fetchCoursesById,
    fetchCourses,
    createCourse,
    updateCourses,
    fetchCoursesByLanguage,
    deleteCourses,
    fetchTopicsById

} = crudRefactored

//console.log(crudRefactored)

/* fetchCoursesByLanguage({
    languageId: 2
})
deleteCourses({ courseId: 47 })
fetchCourses({}) */

/* updateCourses({
    values: {
        title: 'Testing testing 1'
    }
}) */
updateCourses({
    values: {
        courseId: 41,
        updatedFields: {title: 'testing update 1' },
    }
})

fetchTopicsById({ topicId: 3 })