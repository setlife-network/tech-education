const sequelize = require('../models');

const { models } = sequelize;
const { User } = models;
const { Course } = models;
const { Topic } = models;
const { Feedback } = models;
const { Language } = models;


//create Courses
 Feedback.create(
    {
        
        topic_id: 3,
        user_id: 2,
    

    }
)
.then(feedback => {
    console.log('Topic auto-generated ID:', feedback.id);
});  
/* Language.create(
    {
        id: '',
        name: 'fr',
        

    }
)
.then(language => {
    console.log('Language auto-generated ID:', language.id);
}); */
/* User.create(
    {
        
        email: 'r@rebeca.com',
        
       
    }
)
.then(user => {
    console.log('User auto-generated ID:', user.id);
}); */