module.exports = function(sequelize, DataTypes) {
	var PlayerStats = sequelize.define("playerStats", {
		name: DataTypes.STRING,
		age: DataTypes.INTEGER,
		nationality: DataTypes.STRING,
		team: DataTypes.STRING,
		position: DataTypes.STRING,
		games_played: DataTypes.INTEGER,
		goals: DataTypes.INTEGER,
		assists: DataTypes.INTEGER,
		points: DataTypes.INTEGER
	});
	return PlayerStats
};