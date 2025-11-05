import { Link, useLocation } from 'react-router-dom';

function Sidebar({ links }) {
  const location = useLocation();
  return (
    <aside>
      <nav>
        {links.map(link => (
          <Link
            key={link.label}
            to={link.href}
            className={`nav-item${location.pathname === link.href ? ' active' : ''}`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;