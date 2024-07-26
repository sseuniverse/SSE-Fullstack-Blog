export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { email } = await requireAuth(event);
  const user = await UserSchema.findOne({ email });
  try {
    if (!user) return;
    return await PostSchema.findOneAndUpdate(
      { _id: event.context.params?.id, user: user._id },
      body,
      { new: true }
    );
  } catch (error) {
    return error;
  }
});
