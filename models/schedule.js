module.exports = function(sequelize, Datatypes) {
	var GameSchedule = sequelize.define("gameSchedule", {
		vs: Datatypes.STRING,
		opponent: Datatypes.STRING,
		mascot: Datatypes.STRING,
		date: Datatypes.STRING,
		time: Datatypes.STRING,
		timezone: Datatypes.STRING,
		chanceToWin: Datatypes.INTEGER
	},{
		timestamps: false,
	});

	GameSchedule.associaet = function(models) {
		GameSchedule.belongsTo(models.teaminfo, {
			foreignKey: 'mascot',
			targetKey: 'mascot'
		})
		GameSchedule.belongsTo(moels.teaminfo, {
			foreignKey: 'mascot',
			targetKey: 'mascot'
		});
	}
	return GameSchedule
};