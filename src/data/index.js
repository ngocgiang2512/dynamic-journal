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
  current: [
    {
      id: 1,
      topic: "Progress on your Vision",
      members: "Name",
      content: "Progress on your Vision"
    },
    {
      id: 2,
      topic: "Advanced Coaching Skills",
      members: "ACS Program",
      content: "Advanced Coaching Skills"
    },
    {
      id: 3,
      topic: "Roles and Responsibilities",
      members: "Martin Lewis",
      content: "Roles and Responsibilities"
    },
    {
      id: 4,
      topic: "Catch up call",
      members: "Lucinda Stokes",
      content: "Catch up call"
    },
    {
      id: 5,
      topic: "Topic 1",
      members: "Name",
      content: "Topic 1"
    },
    {
      id: 6,
      topic: "Topic 2",
      members: "Name",
      content: "Topic 2"
    },
    {
      id: 7,
      topic: "Topic 3",
      members: "Name",
      content: "Topic 3"
    }
  ],
  archived: [
    {
      id: 1,
      topic: "Progress on your Vision",
      members: "Name",
      content: "Progress on your Vision"
    },
    {
      id: 5,
      topic: "Topic 1",
      members: "Name",
      content: "Topic 1"
    },
    {
      id: 6,
      topic: "Topic 2",
      members: "Name",
      content: "Topic 2"
    },
    {
      id: 7,
      topic: "Topic 3",
      members: "Name",
      content: "Topic 3"
    }
  ]
}

export { conversations }
export default cards