const PageLink = ({ link, itemClass }) => {
  return (
    <li key={link.id}>
      <a href={link.href} className={itemClass}>
        {link.info}
      </a>
    </li>
  );
};
export default PageLink;
