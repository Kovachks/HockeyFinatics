module.exports = function(sequelize, Datatypes) {
	var GameSchedule = sequelize.define("gameSchedule", {
		vs: Datatypes.STRING,
		opponent: Datatypes.STRING,
		mascot: Datatypes.STRING,
		gameDate: Datatypes.DATE,
		time: Datatypes.STRING,
		timezone: Datatypes.STRING,
		chanceToWin: Datatypes.INTEGER
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
};