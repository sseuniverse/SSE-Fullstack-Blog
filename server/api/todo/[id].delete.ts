export default defineEventHandler(async (event) => {
  const { email } = await requireAuth(event);
  const user = await UserSchema.findOne({ email });

  if (user) {
    try {
      return await TodoSchema.findOneAndDelete({
        user: user._id,
        _id: event.context.params?.id,
      });
    } catch (error) {
      return error;
    }
  }
});
