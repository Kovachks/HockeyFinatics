module.exports = function(sequelize, DataTypes) {
	var GameSchedule = sequelize.define("gameSchedule", {
		vs: DataTypes.STRING,
		opponent: DataTypes.STRING,
		mascot: DataTypes.STRING,
		gameDate: DataTypes.DATEONLY,
		time: DataTypes.STRING,
		timezone: DataTypes.STRING,
		chanceToWin: DataTypes.STRING
	},{
		timestamps: false,
	});
	GameSchedule.associate = function(models) {
		GameSchedule.belongsTo(models.teaminfo, {
			foreignKey: 'mascot',
			targetKey: 'mascot'
		})
	}
	return GameSchedule
}