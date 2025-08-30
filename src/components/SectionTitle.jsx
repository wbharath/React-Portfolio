const SectionTitle = ({ text }) => {
  console.log(text)
  return (
    <div className="border-b border-gray-200 pb-10">
      <h2 className="text-3xl font-medium tracking-wider capitalize">{text}</h2>
    </div>
  )
}

export default SectionTitle
