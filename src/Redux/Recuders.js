export const initialState = {
  notes: [
    {
      id: 1,
      title: 'React on my Mind',
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. In repellendus magnam qui impedit, quod, suscipit rerum placeat illum facere tenetur aut eos alias perferendis voluptatem dolores? Cumque consequatur voluptatem mollitia?`,
      created: '1 day',
    },
    {
      id: 2,
      title: 'Wish you React',
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. In repellendus magnam qui impedit, quod, suscipit rerum placeat illum facere tenetur aut eos alias perferendis voluptatem dolores? Cumque consequatur voluptatem mollitia?`,
      created: '1 day',
    },
    {
      id: 3,
      title: 'You gave React a bad name ',
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. In repellendus magnam qui impedit, quod, suscipit rerum placeat illum facere tenetur aut eos alias perferendis voluptatem dolores? Cumque consequatur voluptatem mollitia?`,
      created: '1 day',
    },
    {
      id: 4,
      title: 'Is it React you looking for ? ',
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. In repellendus magnam qui impedit, quod, suscipit rerum placeat illum facere tenetur aut eos alias perferendis voluptatem dolores? Cumque consequatur voluptatem mollitia?`,
      created: '1 day',
    },
  ],
  twitters: [
    {
      id: 1,
      title: 'React on my Mind',
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. In repellendus magnam qui impedit, quod, suscipit rerum placeat illum facere tenetur aut eos alias perferendis voluptatem dolores? Cumque consequatur voluptatem mollitia?`,
      twitterName: 'arnold',
      created: '1 day',
    },
    {
      id: 2,
      title: 'Wish you React',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. In repellendus magnam qui impedit, quod, suscipit rerum placeat illum facere tenetur aut eos alias perferendis voluptatem dolores? Cumque consequatur voluptatem mollitia?',
      twitterName: 'newsweek',
      created: '1 day',
    },
    {
      id: 3,
      title: 'You gave React a bad name ',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. In repellendus magnam qui impedit, quod, suscipit rerum placeat illum facere tenetur aut eos alias perferendis voluptatem dolores? Cumque consequatur voluptatem mollitia?',
      twitterName: 'billgates',
      created: '1 day',
    },
    {
      id: 4,
      title: 'Is it React you looking for ? ',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. In repellendus magnam qui impedit, quod, suscipit rerum placeat illum facere tenetur aut eos alias perferendis voluptatem dolores? Cumque consequatur voluptatem mollitia?',
      twitterName: 'zuck',
      created: '1 day',
    },
  ],
  articles: [
    {
      id: 1,
      title: 'React on my Mind',
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. In repellendus magnam qui impedit, quod, suscipit rerum placeat illum facere tenetur aut eos alias perferendis voluptatem dolores? Cumque consequatur voluptatem mollitia?`,
      articleUrl: `https://youtube.com/helloroman`,
      created: '1 day',
    },
    {
      id: 2,
      title: 'Wish you React',
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. In repellendus magnam qui impedit, quod, suscipit rerum placeat illum facere tenetur aut eos alias perferendis voluptatem dolores? Cumque consequatur voluptatem mollitia?`,
      articleUrl: `https://youtube.com/helloroman`,
      created: '1 day',
    },
    {
      id: 3,
      title: 'You gave React a bad name ',
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. In repellendus magnam qui impedit, quod, suscipit rerum placeat illum facere tenetur aut eos alias perferendis voluptatem dolores? Cumque consequatur voluptatem mollitia?`,
      articleUrl: `https://youtube.com/helloroman`,
      created: '1 day',
    },
    {
      id: 4,
      title: 'Is it React you looking for ? ',
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. In repellendus magnam qui impedit, quod, suscipit rerum placeat illum facere tenetur aut eos alias perferendis voluptatem dolores? Cumque consequatur voluptatem mollitia?`,
      articleUrl: `https://youtube.com/helloroman`,
      created: '1 day',
    },
  ],
};

export const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'REMOVE_ITEM':
      console.log('Hello');
      return {
        ...state,
        [payload.itemType]: [...state[payload.itemType].filter((item) => item.id !== payload.id)],
      };
    default:
      return state;
  }
};
