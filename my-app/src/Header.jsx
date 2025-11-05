function Header({ name, email, avatar, onLogout }) {
  return (
    <header>
      <div className="brand">AssignmentManager</div>
      <div className="profile">
        <div className="avatar">{avatar}</div>
        <div className="user-info">
          <span className="user-name">{name}</span>
          <span className="user-email">{email}</span>
        </div>
        {onLogout && (
          <button className="logout-btn" onClick={onLogout} style={{marginLeft: "2rem"}}>Logout</button>
        )}
      </div>
    </header>
  );
}
export default Header;