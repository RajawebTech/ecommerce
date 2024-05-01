const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('orders_products', {
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

    price: {
      type: DataTypes.STRING(256),
      allowNull: true
    },

    quantity: {
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
    tableName: 'orders_products',
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
