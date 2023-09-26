module.exports = (sequelize, DataTypes) => {
    const AdminInformation = sequelize.define("adminInformation", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        phoneNumber: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false
        },
        adminCode:{
            type:DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
            unique: true
        }
    }, {
        paranoid:true
    })
    return AdminInformation;
}