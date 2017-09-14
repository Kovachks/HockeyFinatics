module.exports = function(sequelize, DataTypes) {
	var PlayerStats = sequelize.define("playerStats", {
		name: DataTypes.STRING,
		age: DataTypes.INTEGER,
		nationality: DataTypes.STRING,
		team: DataTypes.STRING,
		mascot: DataTypes.STRING,
		position: DataTypes.STRING,
		games_played: DataTypes.INTEGER,
		goals: DataTypes.INTEGER,
		assists: DataTypes.INTEGER,
		points: DataTypes.INTEGER
	},{
	timestamps: false,
	classMethods: {
		associate: function(models) {
			playerStats.belongsTo(models.teaminfo, {
				foreignKey: 'mascot'
			})
		}
	}
	});
	return PlayerStats;
};