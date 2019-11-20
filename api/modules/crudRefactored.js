const { User, Course } = require('../models');


module.exports = (function () {


    //explore await comand and sync() functions
    const fetchCoursesById = ({ courseId}) => {
        Course.findByPk(courseId)
        .then(course => {

        })

    return {
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
        deleteFeedback,
    };
})();