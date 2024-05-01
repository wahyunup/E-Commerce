
function Card (props) {
    const imageList = props.imageList
    const name = props.name
    const summaryText = props.summaryText

    return(
        <div className="border-slate-100 border p-6 w-80 rounded-lg bg-white">
            <div className="flex flex-col">
                <div>
                <img className="w-full object-cover sm:h-80 lg:h-56 rounded-md" alt=""src={imageList} />
                </div>
            <h3 className="mt-4 text-xl font-bold text-gray-900 ">{name}</h3>
            <p className="mt-2 max-w-sm text-gray-700 text-sm h-[60px] overflow-auto scroll-smooth">{summaryText}</p>
            <div className="flex">
            <button className="bg-pink-600 w-full py-1 mt-3 text-slate-100 rounded-sm">Add to chart</button>
            </div>
            </div>
        </div>
    )
}
export default Card