import { format } from 'date-fns'

export default {
  name: 'dgusa_event',
  type: 'document',
  title: 'Dragon Gate USA Event',
  fields: [
    {
      name: 'eventName',
      type: 'string',
      title: 'Event Name',
      description: 'Events'
    },
    {
      name: 'eventDate',
      type: 'date',
      title: 'Event on',
      description: 'This is the date of the event'
    },
    {
      name: 'episodeTitle',
      type: 'string',
      title: 'Rewind and Rewatch title',
      description: 'This is the date of the event'
    }
  ],
  orderings: [
    {
      name: 'publishingDateAsc',
      title: 'Publishing date new–>old',
      by: [
        {
          field: 'eventDate',
          direction: 'asc'
        }
      ]
    },
    {
      name: 'publishingDateDesc',
      title: 'Publishing date old->new',
      by: [
        {
          field: 'eventDate',
          direction: 'desc'
        }
      ]
    }
  ],
  // preview: {
  //   select: {
  //     title: 'eventName',
  //     publishedAt: 'publishedAt',
  //     slug: 'slug',
  //     media: 'mainImage'
  //   },
  //   prepare({ title = 'No title', publishedAt, slug, media }) {
  //     const dateSegment = format(publishedAt, 'YYYY/MM')
  //     const path = `/${dateSegment}/${slug.current}/`
  //     return {
  //       title,
  //       media,
  //       subtitle: publishedAt ? path : 'Missing publishing date'
  //     }
  //   }
  // }
}
