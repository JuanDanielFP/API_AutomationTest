const homeworkSchema = {
"type": "object",
  "properties": {
    "id": {
      "type": "integer"
    },
    "firstName": {
      "type": "string"
    },
    "lastName": {
      "type": "string"
    },
    "age": {
      "type": "integer"
    }
  },
  "required": [
    "id",
    "firstName",
    "lastName",
    "age"
  ]

}