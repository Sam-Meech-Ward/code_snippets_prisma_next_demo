import TimeAgo from 'javascript-time-ago'
const timeAgo = new TimeAgo('en-US')

export default function formatTimeAgo(time) {
  if (!time) {
    return ''
  }
  if (typeof time === 'string') {
    time = new Date(time)
  }
  return timeAgo.format(time)
}