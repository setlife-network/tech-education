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
            defaultValue: NOW

        },
        google_id: {
            type: Sequelize.STRING(50)
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