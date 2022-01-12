module.exports = {
  components: {
    schemas: {
      User: {
        type: "object",
        properties: {
          id: {
            type: "number",
            description: "uiniqe id of user",
            example: "1",
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
          email: {
            type: "string",
            description: " email of user",
            example: "vasya@gmail.com",
          },
          password: {
            type: "string",
            description: " password of user",
            example: "qwerty",
          },
        },
      },
      Product: {
        type: "object",
        properties: {
          id: {
            type: "number",
            example: "1",
          },
          name: {
            type: "string",
          },
          price: {
            type: "number",
          },
          brand: {
            type: "string",
            example: "Dior",
            description: "Brand is enum, allowed only (Gucci, Dior, L&V)",
          },
          type: {
            type: "string",
            example: "Formal",
            description: "Type is enum, allowed only (Formal, Suit, Casual)",
          },
          image: {
            type: "string",
            description: "name of the image",
            example: "66b22edb-d372-4834-855f-837502d52a3e.jpg",
          },
        },
      },
      Comment: {
        type: "object",
        properties: {
          userId: {
            type: "number",
            description: "author of comment",
            example: "1",
          },
          productId: {
            type: "number",
            description: "Id of related comment",
            example: 1,
          },
          text: {
            type: "string",
            description: "body of comment",
            example: "this is comment to product",
          },
        },
      },
      Token: {
        type: "object",
        properties: {
          accessToken: {
            type: "string",
            description: "this is an access token",
            example:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
          },
          refreshToken: {
            type: "string",
            description: "this is a refresh token",
            example:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
          },
        },
      },
    },
  },
};
