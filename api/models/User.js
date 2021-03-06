const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    class User extends Sequelize.Model { }
    User.init({
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        email: {
            type: Sequelize.STRING(250),
            unique: true,
            allowNull: false,
        },
        hashed_password: {
            type: Sequelize.STRING(250),
        },
        date_registered: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW,
        },
        google_id: {
            type: Sequelize.STRING(50)
        },
 /*        createdAt: {
           
            type: Sequelize.DATE,
        },
        updatedAt: {
            
            type: Sequelize.DATE,
        }, */

    },

        // Model options object
    {
        timestamps: false,
        sequelize
    });

    User.associate = (models) => {
        User.hasMany(models.Feedback);
    };

    return User;
};
