let cards = [
  {
    id: 1,
    date: {
      year: 2017,
      month: 11,
      day: 11,
      hour: 7
    },
    status: 'inProgress',
    type: 'connection-request',
    category: 'Connection request',
    title: 'Conect to your Coach',
    coach: {
      name: 'Sophie Jenkins',
      type: 'Sports Coach',
      avatarUrl: 'https://farm5.staticflickr.com/4512/37960258536_0a8812cb4f_t.jpg'
    }
  },
  {
    id: 1,
    date: {
      year: 2017,
      month: 11,
      day: 1,
      hour: 10
    },
    status: 'inProgress',
    type: 'connection-request',
    category: 'Connection request',
    title: 'Conect to your Coach',
    coach: {
      name: 'Sophie Jenkins',
      type: 'Sports Coach',
      avatarUrl: 'https://farm5.staticflickr.com/4512/37960258536_0a8812cb4f_t.jpg'
    }
  },
  {
    id: 2,
    date: {
      year: 2017,
      month: 11,
      day: 14,
      hour: 7
    },
    status: 'inProgress',
    type: 'content',
    category: 'Step one',
    title: 'Welcome to Fitness Goals',
    content: {
      videoUrl: 'https://www.youtube.com/embed/RQz2_dIXQno',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum tempus ex, eget dignissim risus sollicitudin vitae. Suspendisse eget dolor et elit convallis eleifend in non quam. Sed feugiat dapibus sagittis. Praesent mattis tempus gravida.'
    }
  },
  {
    id: 3,
    date: {
      year: 2017,
      month: 11,
      day: 14,
      hour: 12
    },
    status: 'inProgress',
    type: 'content',
    category: 'Step two',
    title: 'Welcome to Fitness Goals',
    content: {
      videoUrl: 'https://www.youtube.com/embed/hS5CfP8n_js',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum tempus ex, eget dignissim risus sollicitudin vitae. Suspendisse eget dolor et elit convallis eleifend in non quam. Sed feugiat dapibus sagittis. Praesent mattis tempus gravida.'
    }
  },
  {
    id: 4,
    date: {
      year: 2017,
      month: 11,
      day: 14,
      hour: 20
    },
    status: 'inProgress',
    isFullScreen: false,
    type: 'collection',
    category: 'The basics',
    title: 'From sofa to so fit',
    content: {
      imageUrl: 'https://farm5.staticflickr.com/4501/24161778188_78e7873b24_q.jpg'
    }
  }
]

let conversations = {
  current: ["contact 1", "contact 2", "contact 3", "contact 4", "contact 5"],
  archived: ["contact 6", "contact 7", "contact 8", "contact 9", "contact 10"]
}

export { conversations }
export default cards