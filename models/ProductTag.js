const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER

    },


    tag_id: {
      type: DataTypes.INTEGER,
      refrences: {
        model: 'tag',
        key: 'id'
      }
    },

    product_id: {
      type: DataTypes.STRING,
      refrences: {
        model: 'product',
        key: 'id'
      }
    },

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
