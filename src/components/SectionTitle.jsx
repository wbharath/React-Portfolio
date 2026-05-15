const SectionTitle = ({ text, dark }) => {
  return (
    <div className="mb-14">
      <div className="flex items-center gap-3">
        <div className="w-1 h-7 bg-indigo-500 rounded-full flex-shrink-0" />
        <h2
          className={`text-3xl md:text-4xl font-bold ${
            dark ? 'text-white' : 'text-slate-900'
          }`}
        >
          {text}
        </h2>
      </div>
    </div>
  )
}

export default SectionTitle
