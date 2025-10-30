const SectionTitle = ({ text }) => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
        {text}
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto rounded-full"></div>
    </div>
  )
}
export default SectionTitle
