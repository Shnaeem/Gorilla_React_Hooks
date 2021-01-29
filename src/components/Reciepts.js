import "./Reciepts.css";

const Receipt = ({person, ...data}) => {
    return(
        <div className="receipt-box">
            <h3>Receipt for: {(person)}</h3>
            <ul>
                <li>
                    Main: {data.order.main}
                </li>

                <li>
                    Protien: {data.order.protein}
                </li>
                <li>
                    Rice: {data.order.rice}
                </li>
                <li>
                    Sauce: {data.order.sauce}
                </li>
                <li>
                    Drink: {data.order.drink}
                </li>
                <li>
                    Toppings: {data.order.toppings}
                </li>
                <li class="cost">
                    <strong> Cost:  $ {data.order.cost} </strong>
                </li>

            </ul>   
        </div>
        );
}

export default Receipt;