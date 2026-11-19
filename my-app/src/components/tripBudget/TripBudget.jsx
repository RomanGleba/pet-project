import   './TripBudget.css'

function TripBudget() {

    const city = "Ужгород";
    const budget =  20000;
    const transport = 2000;
    const hotel = 5000;
    const food = 1800;

    const TotalExpenses = transport + hotel + food;
    const RemainingMoney = budget - TotalExpenses;


    return (

        <div className="trip-budget">

            <h2>Бюджет подорожі</h2>
            <h2>Місто: {city}</h2>

            <p>Загальний бюджет: {budget} грн</p>
            <p>Транспорт: {transport} грн</p>
            <p>Житло: {hotel} грн</p>
            <p>Харчування: {food} грн</p>


            <hr/>

            <h3>Загальний бюджет: {TotalExpenses} грн</h3>
            <h3>Залишок коштів: {RemainingMoney} грн</h3>
        </div>
    );
}

export default TripBudget;

