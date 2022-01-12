module.exports = {
  get: {
    tags: ["Product"],
    description: "get one product",
    operationId: "getProduct",
    parameters: [
      {
        name: "id",
        in: "path",
        schema: {
          type: "number",
          description: "product id",
          example: "1",
        },
        required: true,
        description: "A product id",
      },
    ],
    responses: {
      200: {
        description: "one product",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/Product",
            },
          },
        },
      },
    },
  },
};
