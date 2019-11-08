const Sequelize = require ('sequelize');

module.exports =(sequelize) =>{
    class Course extends Sequelize.Model{}
    Course.init({
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
        description:{
            type: Sequelize.TEXT('long'),
            allowNull: true,

        },
        current_version:{
            type:Sequelize.STRING(10),

        },
        youtube_link:{
            type: Sequelize.STRING(550)
        },

    },
   

    // Model options object
{
    sequelize 

});

//FKs
    Course.associate = (models) => {
        Course.hasMany(models.Topic, { foreignKey: 'id' });
        Course.belongsTo(models.Language, { foreignKey: 'languages_id' });

    };

return Course;
};