const stations = (connection, Sequelize) => connection.define('stations', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    frequency: { type: Sequelize.INTEGER, allowNull: false },
    callLetters: { type: Sequelize.STRING, allowNull: false },
    market: { type: Sequelize.STRING, allowNull: false }

    }, { paranoid: true })

module.exports = stations
