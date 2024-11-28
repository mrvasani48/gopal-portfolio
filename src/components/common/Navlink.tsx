const NavLink = ({
  href,
  label,
  close,
}: {
  href: string
  label: string
  close?: () => void
}) => (
  <a
    href={href}
    className="hover:cursor-pointer dark:text-light-primary text-light-primary dark:hover:text-light-white"
    target="_self"
    rel="noreferrer"
    onClick={close}
  >
    {label}
  </a>
)

export default NavLink
