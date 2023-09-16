/* eslint-disable react/prop-types */
import "./Cart.css"

const Cart = ({ selectedCard, totalRemaining, totalCredit, totalPrice }) => {
    return (
        <div className="Cart-container">
            <h4>Credit Hour Remaining : {totalRemaining}hr</h4>
            <hr />
            <div className="course-name">
                <h4 className="underline">Course Name :</h4>
                <ol>
                    {
                        selectedCard.map((card) => (
                            <li key={card.id}>{card.title}</li>
                        ))
                    }
                </ol>
            </div>
            <hr />

            <h4>Total Credit Hour : {totalCredit}</h4>
            <hr />
            <h4>Total Price : ${totalPrice}</h4>
            <hr />
        </div>
    );
};

export default Cart;