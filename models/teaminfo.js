module.exports = function(sequelize, DataTypes) {
	var TeamInfo = sequelize.define("teaminfo", {
		mascot: DataTypes.STRING,
		teamName: DataTypes.STRING,
		primaryColor: DataTypes.STRING,
		secondaryColor: DataTypes.STRING
	},{
		timestamps: false,
		classMethods: {
			associate: function(models) {
				teaminfo.hasMany(models.playerStats, {
					foreignKey: 'mascot'
				});
			}
		}
	});
	return TeamInfo;
}