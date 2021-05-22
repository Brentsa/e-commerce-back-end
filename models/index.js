// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category);

// Categories have many Products
Category.hasMany(Product);

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {through: ProductTag});

ProductTag.belongsTo(Product);
Product.hasMany(ProductTag);

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {through: ProductTag});

ProductTag.belongsTo(Tag);
Tag.hasMany(ProductTag);

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

// // Products belongToMany Tags (through ProductTag)
// Product.belongsToMany(Tag, {
//   through: ProductTag,
//   as: 'product_tags',
//   foreignKey: 'product_id'
// });

// ProductTag.belongsTo(Product, {foreignKey: 'product_id'});
// Product.hasMany(ProductTag, {foreignKey: 'product_id'});


// // Tags belongToMany Products (through ProductTag)
// Tag.belongsToMany(Product, {
//   through: ProductTag,
//   as: 'product_tags',
//   foreignKey: 'tag_id'
// });

// ProductTag.belongsTo(Tag, {foreignKey: 'tag_id'});
// Tag.hasMany(ProductTag, {foreignKey: 'tag_id'});

// Products belongToMany Tags (through ProductTag)