module.exports = function(sequelize, DataTypes) {
	var TeamInfo = sequelize.define("teaminfo", {
		mascot: {
			type: DataTypes.STRING,
			foreignKey: true
		},
		teamName: DataTypes.STRING,
		primaryColor: DataTypes.STRING,
		secondaryColor: DataTypes.STRING
	},{
		timestamps: false,
	});
	TeamInfo.associate = function(models) {
		TeamInfo.hasMany(models.playerStats, {
		foreignKey: 'mascot'
		}),
		TeamInfo.hasMany(models.gameSchedule, {
			foreignKey: 'mascot'
		})
	}
	return TeamInfo;
}