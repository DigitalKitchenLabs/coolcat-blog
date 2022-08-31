export default function Category({ setSelectedTag, tag, selectedTag }) {
  const handleTagClick = (tag: string) => {
    if (selectedTag === tag) {
      return setSelectedTag(null);
    }
    return setSelectedTag(tag);
  };

  return (
    <div
      key={tag}
      onClick={() => handleTagClick(tag)}
      className={`${
        selectedTag === tag && 'ring-2 ring-catred-500 text-catred-300 font-bold'
      } inline-flex items-center px-5 py-2.5 drop-shadow-lg uppercase bg-blue-700 text-offwhite-1 rounded-xl cursor-pointer font-heading text-xl`}
    >
      <span className="text-xs font-medium uppercase">{tag || 'All'}</span>
    </div>
  );
}
