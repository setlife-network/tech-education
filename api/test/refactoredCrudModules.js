//const apiModules = require('./api/modules')
const crudRefactored = require('../modules/crudRefactorClean')

const {

    fetchCoursesById,
    createCourse

} = crudRefactored

console.log(crudRefactored)

createCourse({
    values: {
        courseId: 3,
        updatedFields: {

        }
    }
})
