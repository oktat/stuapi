import db from '../../app/models/modrels.js';

async function up({context: QueryInterface}) {
  if(db.Student) {
    await db.Student.bulkCreate([
      
    ]);
  }else {
    await QueryInterface.bulkInsert('students', [

    ]);
  }

}

async function down({context: QueryInterface}) {
  await QueryInterface.bulkDelete('students');
}

export { up, down }
