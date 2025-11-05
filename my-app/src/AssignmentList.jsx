function AssignmentList({ assignments }) {
  return (
    <div className="assignment-list">
      {assignments.map(a => (
        <div className={`assignment${a.status ? ' ' + a.status : ''}`} key={a.id}>
          <h2>{a.title}</h2>
          <div className="desc">{a.desc}</div>
          <div className="details">
            <span className="due">{a.due}</span>
            <span className="points">{a.points} points</span>
            {a.status === 'submitted' && <span className="status submitted">Submitted</span>}
            {a.status === 'graded' && <span className="status graded">Graded: {a.grade}</span>}
            {!a.status && <button>Submit</button>}
          </div>
        </div>
      ))}
    </div>
  );
}
export default AssignmentList;