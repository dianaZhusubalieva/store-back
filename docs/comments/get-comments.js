module.exports = {
  get: {
    tags: ["Comment"],
    description: "get all comments",
    operationId: "getComments",
    parameters: [
      {
        name: "q",
        in: "query",
        schema: {
          type: "string",
          description: "search for specific comment by tag",
          example: "q=hello",
        },
        description: "search for specific comment by tag",
      },
    ],
    responses: {
      200: {
        description: "one comment",
        content: {
          "application/json": {
            schema: {
              type: "array",
              items: {
                $ref: "#/components/schemas/Product",
              },
            },
          },
        },
      },
    },
  },
};
