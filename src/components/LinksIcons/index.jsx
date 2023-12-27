export default function LinksIcons({ href, title, iconClassName }) {
  return (
    <a href={href} title={title} target="_blank">
      <i className={iconClassName}></i>
    </a>
  )
}