import User from './user.js';
import sequelize from '../database/database.js'
import Student from './student.js';

const db = {};

/* Import your models and write here. 
For example User: */
db.User = User;
db.Student = Student;

// await sequelize.sync({ alter: true })

/*
Write the relationships between the models here.
*/

export default db;
