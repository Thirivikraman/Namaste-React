<div className="flex justify-center w-full">
                <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th>Items</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody class="text-center">
                {filterItems.map((item)=>
                    <tr>
                      <td className="p-2 text-left">{item.card.info.name}</td> 
                      <td className="p-2">₹{item.card.info.price/100}</td>
                    </tr>
                )}
                </tbody>
                </table>
            </div>