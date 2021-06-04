const Table = (table) => {
    const { data, action, from } = table;
    const getTableRow = () => {
        console.log("classSchedule", data)
        console.log(data)
        let row = data.map((x, i) => (
            <tr key={i}>
                <td>{x.date}</td>
                <td>{x.time}</td>
                <td>{x.availability} seats available</td>
                <td>
                    {(from === "ClassSchedule") ? <button className={x.availability ? "book" : "full"} onClick={() => action("book", x)}>{x.availability ? "Book Now" : "Full"}</button> : <button className={"cancel"} onClick={() => action("cancel", x)}>Cancel</button>}
                </td>
            </tr>)
        );
        return row
    }

    return <table style={{ width: "100%" }}>
        <thead>
            <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Availability</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {getTableRow()}
        </tbody>
    </table>

}

export default Table;