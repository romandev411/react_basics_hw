export default function StatusWeather(props) {
    return (
        <div>
            {
                props.temperature > 18 
                ? 'Сегодня тепло!'
                : 'Сегодня холодно!'
            }
        </div>
    )
}