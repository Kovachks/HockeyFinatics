module.exports = function(sequelize, DataTypes) {
	var TeamInfo = sequelize.define("teaminfo", {
		teamMascot: DataTypes.STRING,
		teamName: DataTypes.STRING,
		primaryColor: DataTypes.STRING,
		secondaryColor: DataTypes.STRING
	})
}