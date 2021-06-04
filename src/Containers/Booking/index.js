import React, { useState } from 'react';

import { randomNumber, timeFrom } from '../../Utility'
import { getCart, addCart, removeCart } from '../../Services'

import ClassSchedule from '../../Components/ClassSchedule'
import Cart from '../../Components/Cart'

import './Booking.css';

// const classes = [{
//     name: "Python",
//     weekDays: ["Monday"],
//     time: "12pm"
// },
// {
//     name: "Java",
//     weekDays: ["Wednesday"],
//     time: "9am"
// },
// {
//     name: "HTML",
//     weekDays: ["Friday", "Saturday"],
//     time: "11am"
// },
// {
//     name: "C++",
//     weekDays: ["Tuesday"],
//     time: "3pm"
// },
// {
//     name: "CSS",
//     weekDays: ["Thursday"],
//     time: "5pm"
// }]

const prepareData = () => {
    const dateList = timeFrom(-15);
    let data = dateList.map((item, i) => {
        const newData = {
            id: new Date().valueOf() + i,
            date: new Date(item).toDateString(),
            time: "01:00 PM PST - 02:00 PM PST",
            availability: randomNumber(0, 5)
        }
        return newData
    })
    return data
}


const Booking = () => {
    const [isShowClass, changeView] = useState(true);
    const [classSchedule, setClassSchedule] = useState(prepareData());
    const [cartItem, setCartItem] = useState(getCart());
    const [cartLen, setCartLen] = useState(getCart().length);
    const [seconds] = useState(randomNumber(30, 60));
    const [left] = useState(randomNumber(5, 15));

    const bookNow = (x) => {
        let isExists = false
        const cartItem = getCart();
        if (cartItem.length >= 3) {
            alert("You can only book maximum 3 classes per week")
            return
        }
        cartItem.map(item => {
            if (item.id === x.id) {
                isExists = true;
            }
        })
        if (x.availability && !isExists) {
            let data = classSchedule.map((item, i) => {
                if (item.id == x.id) {
                    item.availability = item.availability - 1;
                }
                return item
            })
            let updatedData = addCart(x);
            setCartItem(updatedData);
            setCartLen(updatedData.length)
            setClassSchedule(data)
        }
    }

    const action = (actionName, data) => {
        if (actionName == "book") {
            bookNow(data)
        } else if (actionName == "cancel") {
            let updatedData = removeCart(data);
            setCartItem(updatedData);
            setCartLen(updatedData.length)
        } else {
            console.log(actionName, data)
        }
    }

    return (
        <div className="main">
            {isShowClass ?
                <ClassSchedule classSchedule={classSchedule} cartLen={cartLen} action={action} seconds={seconds} left={left} changeView={changeView} isShowClass={isShowClass} /> :
                <Cart cartItem={cartItem} action={action} changeView={changeView} isShowClass={isShowClass} />
            }
        </div>
    );
}

export default Booking;