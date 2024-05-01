const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('orders_details', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },

    order_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    

    name: {
      type: DataTypes.STRING(256),
      allowNull: true
    },

    stock: {
      type: DataTypes.STRING(256),
      allowNull: true
    },

    order: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    
    status: {
        type: DataTypes.STRING(256),
        allowNull: true
      },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    }
  }, {
    sequelize,
    tableName: 'orders_details',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
