const Sequelize = require ('sequelize');

module.exports =(sequelize) =>{
    class Topic extends Sequelize.Model{}
    Topic.init({
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            
        },
        title:{
            type: Sequelize.STRING(250),
            unique: true ,
            allowNull: false,

        },
        order:{
            type: Sequelize.INTEGER,

        },
        current_version:{
            type: Sequelize.STRING(10),

        },
        rich_text_content:{
            type: Sequelize.TEXT('long'),
        },
        created_on:{
            type: Sequelize.DATEONLY,
        },


    },

    // Model options object
{
    sequelize 
});

Topic.associate = models => {
    Topic.belongsTo(models.Course, {foreignKey: 'course_id'}); 
    Topic.hasMany(models.Feedback),{foreignKey: 'id'});
};


return Topic;
};