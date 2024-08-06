export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  try {
    return await TodoSchema.findOneAndUpdate(
      { _id: event.context.params?.id},
      body,
      { new: true }
    );
  } catch (error) {
    return error;
  }
});
