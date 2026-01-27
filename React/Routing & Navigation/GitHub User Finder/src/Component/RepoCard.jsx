const RepoCard = ({ repoInfo = {} }) => {
  const { name } = repoInfo;
  return (
    <div className="p-4 shadow-md overflow-hidden h-60">
      <h3>Repository Name:</h3>
      <p>{name}</p>
    </div>
  );
};

export default RepoCard;
