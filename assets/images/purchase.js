module.exports = function(sequelize, DataTypes) {
  var Appointment = sequelize.define("Appointment", {
    service_addr_id: {
        type: DataTypes.INTEGER
    },
    style: {
      type: DataTypes.STRING
      
    },
    time: {
      type: DataTypes.TIME
    },
    date: {
      type: DataTypes.DATEONLY
    }
  });
return Appointment;
};
