const Cart = () => {
    const list = [
        "사과",
        "바나나",
        "멜론"
    ];


    return(
        <ol>
            {
                list.map(element => (
                    <li>{element}</li>
                ))
            }
        </ol>

    );
}

export default Cart;