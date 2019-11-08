const Sequelize= require ('sequelize');

module.exports =(sequelize) =>{
    class User extends Sequelize.Model{}
    User.init({
        id:{
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
       
        },
        email:{
            type: STRING(250),
            unique: true ,
            allowNull: false,

        },
        hashed_password:{
            type: STRING(250),

        },
        date_registered:{
            type: DATE, 
            defaultValue: NOW 

        },
        google_id:{
            type: STRING(50)
        },

    },

    // Model options object
{
    timestamps: true,
    sequelize 

});
User.associate = (models) => {
    User.hasMany(models.Feedback, { foreignKey: 'id' });
};

return User;
};