module.exports = {
  get: {
    tags: ["Comment"],
    description: "get one comment",
    operationId: "getComment",
    parameters: [
      {
        name: "id",
        in: "path",
        schema: {
          type: "number",
          description: "comment id",
          example: "1",
        },
        required: true,
        description: "A comment id",
      },
    ],
    responses: {
      200: {
        description: "one comment",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/Comment",
            },
          },
        },
      },
    },
  },
};
