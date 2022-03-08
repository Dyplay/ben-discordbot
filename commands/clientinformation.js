module.exports = new Command({
    name: "redeem",
  description: `redeem preium code`,
  userPermissions: [],
  category: "",
  options: [
    {
      name: "code",
      description: `give me code`,
      type: "STRING",
      required: true,
    },
  ],

})