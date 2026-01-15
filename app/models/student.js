import { DataTypes } from 'sequelize'
import sequelize from '../database/database.js'

const Student = sequelize.define('students', {
    name: { type: DataTypes.STRING,  allowNull: false  },
    class: { type: DataTypes.STRING,  allowNull: true  },
    birth: { type: DataTypes.DATEONLY,  allowNull: true  }
}, {
    timestamps: true,
    freezeTableName: true
})

export default Student
