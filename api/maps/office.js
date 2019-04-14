{
  id: 'office-a1',
  description: 'You are sitting at a plain desk with a drawer and in an uncomfortable chair.  On the desk is a computer displaying multiple spreadsheets, an empty coffee cup, and a picture of your dog.'
  actions: [
    {
      keywords: ['drawer', 'desk'],
      action: ['open', 'pull'],
      required: {
        status: 'closed',
        error: 'The drawer is already open.'
      }
      onSuccess: 'The drawer slides open and reveals 3 paperclips and a blue ballpoint pen.'
    }
  ]
  items: [
    {
      name: 'picture'
      description:
      isTakeable: true
      use: useItem(this.name)
    },
    {
      name: 'drawer',
      isTakable: false,
      status: 'closed',
      description: {
        open: 'There are 3 paperclips and a blue ballpoint pen in the drawer.'
        closed: 'The drawer is closed.'
      },
      actions: [
        {
          changeAction: ['open', 'pull'],
          required: {
            status: 'closed',
            error: 'The drawer is already open.'
          }
        },
        {
          changeAction: ['close', 'push', 'shut'],
          required: {
            status: 'open',
            error: 'The drawer is already closed.'
          }
        }
      ]
    }
  ],
  exits: [{direction: 'S', roomId: 'office-a2'}, {direction: 'E', roomId: 'office-b1'}]
}
