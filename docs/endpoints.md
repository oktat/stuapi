# Endpoints

Endpoint: students

| Endpoint          | Method | Auth | CRUD   | Description        |
| ----------------- | ------ | ---- | ------ | ------------------ |
| /api/students     | GET    | no   | Read   | Get students.      |
| /api/students/:id | GET    | no   | Read   | Get a student.     |
| /api/students     | POST   | no   | Create | Create a student.  |
| /api/students/:id | UPDATE | no   | Update | Update a student.  |
| /api/students/:id | DELETE | no   | Delete | Delete a students. |

## Get student/students

For example get students:

```url
/api/employees
```

Retrieve student ID 25:

```url
/api/employees/25
```

## Create new student

Example of what to send:

```json
{
    "name": "Erős István",
    "class": "15a",
    "birth": "2009-05-10"
}
```

## Update a student

Example of what to send:

```json
{
    "name": "Vad Irén",
    "class": "15b",
    "birth": "2009-05-10"
}
```

Modify student ID 25:

```url
/api/employees/25
```

## Delete student

Deleting student ID 25:

```url
/api/employees/25
```
