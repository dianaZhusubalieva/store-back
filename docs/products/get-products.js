module.exports = {
  get: {
    tags: ["Product"],
    description: "get all products",
    operationId: "getProducts",
    parameters: [
      {
        name: "q",
        in: "query",
        schema: {
          type: "string",
          description: "search for specific product by name or type",
          example: "q=hello",
        },
        description: "search for specific product by name or type",
      },
      {
        name: "page",
        in: "query",
        schema: {
          type: "number",
          description: "page of products",
          example: "page=2",
        },
        description: "get specific page of products",
      },
    ],
    responses: {
      200: {
        description: "one product",
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
