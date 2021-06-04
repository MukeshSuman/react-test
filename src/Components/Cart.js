import Table from './Table'

import backarrow from '../arrow.svg'

const Cart = (item) => {
    const { cartItem, action, changeView, isShowClass } = item;
    return <>
        <div className="class-schedule">
            <div className="separate-elem">
                <h3 className="claim-title">Cart</h3>
                <span onClick={() => changeView(!isShowClass)}>
                    <img style={{ width: "32px", height: "32px", marginTop: "15px" }} src={backarrow} className="arrow-icon" alt="back" />
                </span>
            </div>
        </div>
        <div className="box">
            <Table data={cartItem} action={action} from={"Cart"}></Table>
        </div>
    </>
}

export default Cart;