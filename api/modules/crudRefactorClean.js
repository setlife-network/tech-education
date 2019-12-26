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

    //COURSES
    const fetchCoursesById = (params) => {
        const { courseId } = params 
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
    const fetchCourses = (params) => {
        return (
            Course.findAll({
            })
            .then(courses => {
                console.log('All Courses:', JSON.stringify(courses, null, 4));
                return courses
            })
        )
    }
    const createCourse = (params) => {
        const {
            title,
            description,
            current_version,
            youtube_link,
            language_id,
        } = params.values;

        Course.create(
            {
                title,
                description,
                current_version,
                youtube_link,
                language_id,
            }
        )
        .then(course => {
            console.log('Id of new course:', course.id);
        });

    } 
    const updateCourses = (params) => {
        const { courseId, updatedFields } = params.values
        
        Course.update(
            { updatedFields },
            { where: { id: courseId } }
        )
        .then(courses => {
            console.log('All Courses:', JSON.stringify(courses, null, 4));
            return courses
        })
        
    }
    const fetchCoursesByLanguage = (params) => {
        const { languageId } = params 
        return (
            Course.findAll({
                where: {
                    language_id: languageId
                }
            })
            .then(courses => {
                console.log('Courses:', JSON.stringify(courses, null, 4));
                return courses
            })
        )
    }
    const deleteCourses = (params) => {
        const { courseId } = params 
        return (
            Course.destroy({
                where: {
                    id: courseId
                }
            })
            .then(courses => {
                console.log('Course deleted correctly');
                return courses
            })
        )
    }

    //TOPICS
    const fetchTopicsById = (params) => {
        const { topicId } = params 
        return (
            Topic.findAll({
                where: {
                    id: topicId
                }
            })
            .then(topics => {
                console.log('All Topics:', JSON.stringify(topics, null, 4));
                return topics
            })
        )
    }

    return {
        fetchCourses,
        fetchCoursesById,
        createCourse,
        updateCourses,
        fetchCoursesByLanguage,
        deleteCourses,

        fetchTopicsById,
        /*
        updateCourses,
        fetchTopics,
        
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