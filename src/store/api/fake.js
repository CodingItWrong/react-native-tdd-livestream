export default {
  get() {
    return Promise.resolve({
      data: {
        data: [
          {
            attributes: {
              name: 'Burger Place',
            },
          },
        ],
      },
    });
  },
};
