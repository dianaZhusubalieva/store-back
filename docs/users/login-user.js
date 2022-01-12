module.exports = {
  post: {
    tags: ["User"],
    description: "login user",
    operationId: "loginUser",
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
      400: {
        description: "User with given creds not found",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                message: {
                  type: "string",
                  example: "User not found",
                },
              },
            },
          },
        },
      },
    },
  },
};
