module.exports = function(sequelize, DataTypes) {
	var PlayerStats = sequelize.define("playerStats", {
		name: DataTypes.STRING,
		age: DataTypes.STRING,
		nationality: DataTypes.STRING,
		team: DataTypes.STRING,
		mascot: DataTypes.STRING,
		position: DataTypes.STRING,
		games_played: DataTypes.STRING,
		goals: DataTypes.STRING,
		assists: DataTypes.STRING,
		points: DataTypes.STRING
	},{
	timestamps: false,
	});
	PlayerStats.associate = function(models) {
		PlayerStats.belongsTo(models.teaminfo, {
		foreignKey: 'mascot',
		targetKey: 'mascot'
		});
	}
	return PlayerStats
}