module.exports = function(sequelize, DataTypes) {
	var User = sequelize.define("user", {
		firstName: DataTypes.STRING,
		lastName: DataTypes.STRING,
		email: DataTypes.STRING,
		username: DataTypes.STRING,
		password: DataTypes.STRING,
		favoriteTeam: DataTypes.STRING
	},{
	timestamps: false,
	});
	return User
}