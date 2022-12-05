import { forecastType } from '../types'

type Props = {
  data: forecastType
}

const Forecast = ({ data }: Props): JSX.Element => {
  return (
    <div className="w-full md:max-w-[500px] py-4 md:py-4 md:px-10 lg:p-24 h-full lg:h-auto bg-white bg-opacity-20 backdrop-blur-ls rounded drop-shadow-lg">
      <div className="mx-auto w-[300px]">
        <section className="text-center">
          <h2>{data.name}</h2>
        </section>
      </div>
    </div>
  )
}

export default Forecast
