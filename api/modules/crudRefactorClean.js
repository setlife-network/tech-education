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
    const fetchTopics = (params) => {
        return (
            Topic.findAll({
            })
            .then(topics => {
                console.log('All Topics:', JSON.stringify(topics, null, 4));
                return topics
            })
        )
    }
    const fetchTopicsByCourse = (params) => {
        const { courseId } = params 
        return (
            Topic.findAll({
                where: {
                    course_id: courseId
                }
            })
            .then(topics => {
                console.log('All Topics by Course:', courseId, JSON.stringify(topics, null, 4));
                return topics
            })
        )
    }
    const createTopics = (params) => {
        const {
            title,
            order,
            rich_text_content,
            created_on,
            course_id,
        } = params.values;

        Topic.create(
            {
                title,
                order,
                rich_text_content,
                created_on,
                course_id,
            }
        )
        .then(topics => {
            console.log('Id of new topic:', topics.id);
        });

    } 
    const deleteTopics = (params) => {
        const { topicId } = params 
        return (
            Topic.destroy({
                where: {
                    id: topicId
                }
            })
            .then(topics => {
                console.log('Course deleted correctly');
                return topics
            })
        )
    }
    const fetchTopicsByLanguage = (params) => {
        const { languageId } = params 
        return (
            Topic.findAll({
                where: {
                    language_id: languageId
                }
            })
            .then(topics => {
                console.log('Topics:', JSON.stringify(courses, null, 4));
                return topics
            })
        )
    }
    //USERS
    const fetchUsers = (params) => {
        return (
            User.findAll({
            })
            .then(users => {
                console.log('All Topics:', JSON.stringify(users, null, 4));
                return users
            })
        )
    }
    const createUsers = (params) => {
        const {
            email,
            hashed_password,
            date_registered,
            google_id,
        } = params.values;

        User.create(
            {
                email,
                hashed_password,
                date_registered,
                google_id,
            }
        )
        .then(users => {
            console.log('Id of new user:', users.id);
        });

    } 
    const deleteUsers = (params) => {
        const { userId } = params 
        return (
            User.destroy({
                where: {
                    id: userId
                }
            })
            .then(users => {
                console.log('Course deleted correctly');
                return users
            })
        )
    }
    //FEEDBACK
    const fetchFeedback = (params) => {
        return (
            Feedback.findAll({
            })
            .then(feedbacks => {
                console.log('All feedbacks:', JSON.stringify(feedbacks, null, 4));
                return feedbacks
            })
        )
    }
    const createFeedback = (params) => {
        const {
            topic_id,
            user_id,
            text,
            date_created,
            adapter_direction
        } = params.values;

        Feedback.create(
            {
                topic_id,
                user_id,
                text,
                date_created,
                adapter_direction
            }
        )
        .then(feedbacks => {
            console.log('Id of new feedback:', feedbacks.id);
        });

    }
    const deleteFeedback = (params) => {
        const { feedbackId } = params 
        return (
            Feedback.destroy({
                where: {
                    id: feedbackId
                }
            })
            .then(feedbacks => {
                console.log('Feedback deleted correctly');
                return feedbacks
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
        fetchTopics,
        fetchTopicsByCourse,
        createTopics,
        deleteTopics,
        fetchTopicsByLanguage,

        fetchUsers,
        createUsers,
        deleteUsers,
        
        fetchFeedback,
        createFeedback,
        deleteFeedback,
        /*updateFeedback,
        */
    };

})();