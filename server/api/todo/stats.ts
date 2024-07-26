export default eventHandler(async (event) => {
  try {
    const totalTodos = await TodoSchema.countDocuments();
    const distinctUsers = await TodoSchema.countDocuments();

    return {
      todos: totalTodos,
      users: distinctUsers,
    };
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: "Error fetching todo counts",
    });
  }
});
