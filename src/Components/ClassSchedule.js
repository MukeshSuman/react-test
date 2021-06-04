import Table from './Table'

import ecart from '../shopping-cart.svg'

const ClassSchedule = (item) => {
    const { classSchedule, cartLen, action, seconds, left, changeView, isShowClass } = item;
    return <>
        <div className="class-schedule">
            <div className="time-left">Time Left: {seconds}seconds</div>
            <div className="separate-elem">
                <h3 className="claim-title">Claim Your Free Trial Class</h3>
                <span onClick={() => changeView(!isShowClass)}>
                    <img style={{ width: "32px", height: "32px", marginTop: "15px" }} src={ecart} className="ecart-icon" alt="e-cart" />
                    <span className="count">{cartLen}</span>
                </span>
            </div>
        </div>
        <div className="box">
            <div className="separate-elem">
                <span>Class Schedule</span>
                <span>Free Seats Left: {left}</span>
            </div>
            <div>
                <Table data={classSchedule} action={action} from={"ClassSchedule"}></Table>
            </div>
        </div>
    </>
}

export default ClassSchedule;