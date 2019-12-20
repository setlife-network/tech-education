const sequelize = require('../models');

const { models } = sequelize;
const { 
    User,
    Course,
    Topic, 
    Language,
    Feedback 
} = models;


module.exports = (function () {

    const fetchCoursesById = (params) => {
        console.log(params)
        return (
            Course.findAll({
                where: {
                    id: courseId
                }
            })
            .then(courses => {
                console.log('All Courses:', JSON.stringify(courses, null, 4));
                return courses
            })
        )
    }

    const createCourse = (params) => {
        console.log('params')
        console.log(params)
        console.log(params.values)

        Course.create(
            {
                title: params.values.title,
                description: params.values.description,
                current_version: params.values.current_version,
                youtube_link: params.values.youtube_link,
                language_id: params.values.language_id
    
            }
        )
        .then(course => {
            console.log('Id of new course:', course.id);
        });
    
    }
    
    return {
        //fetchCourses,
        fetchCoursesById,
        createCourse
       /*  fetchCoursesByLanguage,
        
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
    };

})();