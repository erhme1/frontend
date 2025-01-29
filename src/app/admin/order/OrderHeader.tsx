import { CalendarDays } from "lucide-react";
export default function OrderHeader() {
	return (
		<div>
			<div className="flex items-center justify-between bg-[#FFFFFF] text-black p-4  rounded-tl-lg rounded-tr-xl mt-20">
				<div>
					<h1 className="text-[20px] font-[700]">Orders</h1>
					<p className="text-[12px] font-[500] text-gray-400"></p>
				</div>
				<div className="flex items-center space-x-4">
					<div className="flex items-center bg-white rounded-gray px-4 py-2 rounded-full border border-[#E4E4E7]">
						<CalendarDays className="size-[16px] mr-2" />
					</div>
					<button className="bg-gray-800 hover:bg-gray-700 text-white text-[14px] font-[500] px-4 py-2 rounded-full">
						Change delivery state
					</button>
				</div>
			</div>

			<div className="space-y-4">
				<div className="grid grid-cols-9 items-center border border-gray-200 p-4">
					<input type="checkbox" className=" w-4 h-4" />
					<span className="col-span-1 text-gray-600 ">№</span>
					<span className="col-span-2 text-gray-800 truncate ml-0.5">
						Customer
					</span>
					<span className="col-span-1 text-gray-600">Food</span>
					<span className="col-span-1 text-gray-600 ml-2">Date</span>
					<span className="col-span-1 text-gray-800 ml-1">Total</span>
					<span className="col-span-1 text-gray-800 ml-2.5">
						Delivery address
					</span>
					<div className="text-[14px] font-[500] ml-3">Delivery state</div>
				</div>
			</div>
		</div>
	);
}
