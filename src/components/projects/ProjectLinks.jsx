export default function ProjectLinks({ project }) {
  const { live, source } = project.links;
  const message = project.projectStatus?.message;
  const hasLinks = Boolean(live || source);

  //if no message and no links, we want nothing
  if (!message && !hasLinks) {
    return null;
  }

  //if we have a message, we want the message
  //if we have a message and links, we want a space after message
  //we only want to show links if they exist in the data
  return (
    <p className="mb-4">
      {message}
      {message && hasLinks && " "}
      {live && (
        <a href={live} target="_blank" rel="noopener noreferrer">
          See it Live
        </a>
      )}
      {live && source && <span aria-hidden="true"> · </span>}
      {source && (
        <a href={source} target="_blank" rel="noopener noreferrer">
          Review the Code
        </a>
      )}
    </p>
  );
}
