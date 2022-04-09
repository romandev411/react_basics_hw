export default function Pizza({ingredients}) {
    return (
        <div>
            <h2>Ингредиенты для пиццы</h2>

            <ul>
                {
                    ingredients.map(item => <li key={item}>{item}</li>)
                }
            </ul>
        </div>
    )
}