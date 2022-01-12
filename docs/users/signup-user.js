module.exports = {
  post: {
    tags: ["User"],
    description: "signup  user",
    operationId: "signupUser",
    parameters: [],
    requestBody: {
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              email: {
                type: "string",

                description: " email of user",
                example: "vasya@gmail.com",
              },
              password: {
                type: "string",
                minLength: 3,
                maxLength: 30,
                description: " password of user",
                example: "qwerty",
              },
              firstName: {
                type: "string",
                description: "name of user",
                example: "Vasya",
              },
              lastName: {
                type: "string",
                description: "lastname of user",
                example: "Ivanov",
              },
            },
            required: ["email", "password"],
          },
        },
      },
    },
    responses: {
      200: {
        description: "get tokens",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/Token",
            },
          },
        },
      },
    },
  },
};
