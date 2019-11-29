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

    //USER
    User.findAll().then(users => {
        console.log('All users:', JSON.stringify(users, null, 4));
    });
    User.create(
        {
            id: '',
            email: 'rebecaa3333a@rebeca.com',
            hashed_password: '',
            date_registered: '',
            google_id: '',


        }
    )
    .then(user => {
        console.log('User auto-generated ID:', user.id);
    });

    //COURSE
    const fetchCoursesById = ({ courseId }) => {
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

    const createCourse = ({ values }) => {
        Course.create(
            {
                title: req.body.title,
                description: req.body.description,
                current_version: req.body.current_version,
                youtube_link: req.body.youtube_link,
                language_id: req.body.language_id
    
            }
        )
        .then(course => {
            console.log('Id of new course:', course.id);
        });
    
    }
    
    Topic.findAll().then(topics => {
        console.log('All Topics:', JSON.stringify(topics, null, 4));
    });
    Topic.create(
        {
            id: 8,
            title: 'titlexxx',
            order: '',
            rich_text_content: '',
            created_on: '',
            course_id: 2


        }
    )
    .then(topic => {
        console.log('Topic auto-generated ID:', topic.id);
    });

    Feedback.findAll().then(feedbacks => {
        console.log('All Feedback:', JSON.stringify(feedbacks, null, 4));
    });

    Language.findAll().then(languages => {
        console.log('All Feedback:', JSON.stringify(languages, null, 4));
    });
    Language.create(
        {
            id: '',
            name: 'fr',
        }
    )
    .then(language => {
        console.log('Language auto-generated ID:', language.id);
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


    return {
        //fetchCourses,
        fetchCoursesById,
       /*  fetchCoursesByLanguage,
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
    };

})();