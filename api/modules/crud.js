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

    // Courses
    const fetchCourseById = (params) => {
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
    const createCourse = (params) => {
        const {
            title,
            description,
            current_version,
            youtube_link,
            language_id,
        } = params.values;

        return (
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
                return course
            })
        )

    }
    const updateCourse = (params) => {
        const { courseId, updatedFields } = params
        
        return (
            Course.update(
                { updatedFields },
                { where: { id: courseId } }
            )
            .then(courses => {
                console.log('All Courses:', JSON.stringify(courses, null, 4));
                return courses
            })
        )
    }
    const deleteCourse = (params) => {
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

    // Topics
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
    const createTopic = (params) => {
        const {
            title,
            order,
            rich_text_content,
            created_on,
            course_id,
        } = params.values;

        return (
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
            })
        )
    }
    const updateTopic = (params) => {
        const { topicId, updatedFields } = params
        
        return (
            Topic.update(
                { updatedFields },
                { where: { id: topicId } }
            )
            .then(topics => {
                console.log('All Topics:', JSON.stringify(topics, null, 4));
                return topics
            })
        )
        
    }
    const deleteTopic = (params) => {
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

    // Users
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
    const createUser = (params) => {
        const {
            email,
            hashed_password,
            date_registered,
            google_id,
        } = params.values;

        return (
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
            })
        )

    }
    const updateUser = (params) => {
        const { userId, updatedFields } = params
        
        return (
            User.update(
                { updatedFields },
                { where: { id: userId } }
            )
            .then(users => {
                console.log('All Users:', JSON.stringify(users, null, 4));
                return users
            })
        )
        
    }
    const deleteUser = (params) => {
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

    // Feedbacks
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

        return (
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
            })
        )

    }
    const updateFeedback = (params) => {
        const { feedbackId, updatedFields } = params
        
        return (
            Feedback.update(
                { updatedFields },
                { where: { id: feedbackId } }
            )
            .then(feedbacks => {
                console.log('All Feedbacks:', JSON.stringify(feedbacks, null, 4));
                return feedbacks
            })
        )
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
        fetchCourseById,
        fetchCoursesByLanguage,
        createCourse,
        updateCourse,
        deleteCourse,

        fetchTopics,
        fetchTopicsById,
        fetchTopicsByCourse,
        fetchTopicsByLanguage,
        createTopic,
        updateTopic,
        deleteTopic,

        fetchUsers,
        createUser,
        updateUser,
        deleteUser,
        
        fetchFeedback,
        createFeedback,
        deleteFeedback,
        updateFeedback,
    };

})();