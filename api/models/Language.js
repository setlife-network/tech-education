const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    class Language extends Sequelize.Model {}
    
    Language.init({
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
           
        },
        name: {
            type: Sequelize.STRING(50),
            allowNull: false,

        },
/*         createdAt: {
            
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

    Language.associate = (models) => {
        Language.hasMany(models.Course);
    };

    return Language;
};