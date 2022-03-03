const stations = (connection, Sequelize) => connection.define('stations', 
    {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        frequency: { type: Sequelize.INTEGER, allowNull: false },
        callLetters: { type: Sequelize.STRING, allowNull: false },
    }, { paranoid: true }
    )
  
  const programming = (connection, Sequelize) => connection.define('programming', 
    {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        programming: { type: Sequelize.STRING, allowNull: false },
    }, { paranoid: true }
    )
  
    const markets = (connection, Sequelize) => connection.define('markets', 
    {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        stationId: { type: Sequelize.INTEGER, allowNull: false },
        market: { type: Sequelize.STRING, allowNull: false }
    }, { paranoid: true }
    )

    const programMarket = (connection, Sequelize, programming, markets) => connection.define ('programMarket', 
        {
                programmingId: { type: Sequelize.INTEGER,  primaryKey: true}, 
                references: { model: programming,  key: id },
                marketsId: { type: Sequelize.INTEGER, primaryKey: true}, 
                references: { model: markets, key: id }
              },{ paranoid: true })

